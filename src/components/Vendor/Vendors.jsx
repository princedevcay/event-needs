import { useState, useEffect } from 'react';
import api from '../../api';
import { Box, Input, Button, Heading, VStack, HStack, Text, Grid, Container, Spinner, Tooltip } from '@chakra-ui/react';
import Header from '../Header';
import Footer from '../Footer';
import VendorCard from '../Vendor/VendorCard';
import VendorCategories from './VendorCategories';
import { FaCamera, FaUtensils, FaMusic, FaShoppingCart } from 'react-icons/fa'; // Import appropriate icons

const Vendors = () => {
  const [vendors, setVendors] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedSortOption, setSelectedSortOption] = useState('');
  const [selectedPriceRange, setSelectedPriceRange] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData();
  }, [selectedCategory, selectedSortOption, selectedPriceRange, searchQuery]);

  const fetchData = () => {
    setLoading(true);
    api.get('vendor')
      .then(response => {
        console.log("Fetched vendors:", response.data);
        let filteredVendors = response.data;

        if (selectedCategory) {
          filteredVendors = filteredVendors.filter(vendor => {
            return vendor.acf && vendor.acf.vendor_category === selectedCategory;
          });
        }

        setVendors(filteredVendors);
        setLoading(false);
      })
      .catch(err => {
        setError(err);
        setLoading(false);
      });

    api.get('categories')
      .then(response => {
        const filteredCategories = response.data.filter(category => category.name !== 'Uncategorized');
        setCategories(filteredCategories);
      })
      .catch(err => {
        setError(err);
      });
  };

  const handleCategoryClick = (categoryName) => {
    setSelectedCategory(categoryName);
  };

  return (
    <Box>
      <Header />
      <Box as="main">
        <VStack spacing={8} color="brown.800" bg="brown.50" p={10}>
          <Heading as="h1" size="xl">Vendors</Heading>
          <Text textAlign="center" fontFamily="body">Select a category to filter the vendors list</Text>
          <Container maxW="container.xl">
          <Grid templateColumns={{ base: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' }} gap={4}>
                <Tooltip label="All Categories" aria-label="All Categories">
                  <Box
                    p={4}
                    textAlign="center"
                    bg="white"
                    borderRadius="md"
                    cursor="pointer"
                    _hover={{ transform: 'scale(1.05)', transition: 'transform 0.3s ease', boxShadow: 'lg' }}
                    onClick={() => handleCategoryClick('')}
                  >
                    All Categories
                  </Box>
                </Tooltip>
                {categories.map(category => (
                  <Tooltip key={category.id} label={category.name} aria-label={category.name}>
                    <Box
                      p={4}
                      textAlign="center"
                      bg="brown.500"
                      color="white"
                      borderRadius="md"
                      cursor="pointer"
                      _hover={{ transform: 'scale(1.05)', transition: 'transform 0.3s ease', boxShadow: 'lg' }}
                      onClick={() => handleCategoryClick(category.name)}
                    >
                      {category.name}
                      {category.name === 'Photographers' }
                      {category.name === 'Caterers' }
                      {category.name === 'Entertainers'}
                      {category.name === 'Retailers'}
                    </Box>
                  </Tooltip>
              ))}
            </Grid>
          </Container>
        </VStack>
        <Container maxW="container.xl" py={10}>
          {loading ? (
            <Spinner size="xl" color="brown.800" />
          ) : (
            <>
              {vendors.length > 0 ? (
                <Grid templateColumns={{ base: '1fr', md: 'repeat(3, 1fr)' }} gap={6} p={4}>
                  {vendors.map((vendor) => (
                    <VendorCard
                      key={vendor.id}
                      vendor={vendor}
                    />
                  ))}
                </Grid>
              ) : (
                <Text textAlign="center" fontSize="xl">No vendors in this category</Text>
              )}
            </>
          )}
        </Container>
      </Box>
      <Footer />
    </Box>
  );
};

export default Vendors;
