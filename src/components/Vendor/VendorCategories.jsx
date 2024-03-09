import { useState, useEffect } from 'react';
import api from '../../api';

import { VStack, Text, Spinner, Grid, GridItem, Container } from '@chakra-ui/react';

const VendorCategories = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await api.get('categories');
        // Filter out Uncategorized category
        const filteredCategories = response.data.filter(category => category.name !== 'Uncategorized');
        setCategories(filteredCategories);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching categories:', error);
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  return (
    <Container maxW="container.xl">
      <VStack spacing={4}>
        <Text fontSize="xl" fontWeight="bold">All Vendor Categories</Text>
        {loading ? (
          <Spinner />
        ) : (
          <Grid templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(4, 1fr)" }} gap={4}>
            {categories.map(category => (
              <GridItem key={category.id}>
                <Text>{category.name}</Text>
              </GridItem>
            ))}
          </Grid>
        )}
      </VStack>
    </Container>
  );
};

export default VendorCategories;
