// ProductList.js

import React, { useState, useEffect } from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('pk_test_clJdYwU2hRrSj8XDq69ncXGO');

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const stripe = await stripePromise;
        const response = await fetch('https://api.stripe.com/v1/products', {
          headers: {
            Authorization: `Bearer sk_test_Y8R51ST7H6KszolJwH5AbJNv`,
          },
        });

        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }

        const productsData = await response.json();

        const productsWithPrices = await Promise.all(productsData.data.map(async product => {
          const pricesResponse = await fetch(`https://api.stripe.com/v1/prices?product=${product.id}`, {
            headers: {
              Authorization: `Bearer sk_test_Y8R51ST7H6KszolJwH5AbJNv`,
            },
          });

          if (!pricesResponse.ok) {
            throw new Error('Failed to fetch prices');
          }

          const pricesData = await pricesResponse.json();
          const price = pricesData.data[0].unit_amount_decimal;

          return { ...product, price };
        }));

        setProducts(productsWithPrices);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchProducts();
  }, []);

  if (error) {
    return <Box>Error: {error}</Box>;
  }

  return (
    <Box>
      <Heading as="h1" size="lg" mb={4}>Products</Heading>
      {products.map(product => (
        <Box key={product.id} p={4} borderWidth="1px" borderRadius="md" mb={4}>
          <Heading as="h2" size="md">{product.name}</Heading>
          <Text>{product.description}</Text>
          <Text>Price: ${parseFloat(product.price) / 100}</Text>
        </Box>
      ))}
    </Box>
  );
};

export default ProductList;
