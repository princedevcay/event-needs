import { Box, Button, Heading, Text, Container, Link, HStack, Grid, GridItem } from '@chakra-ui/react';
import { FaShoppingCart, FaBullhorn, FaStar } from 'react-icons/fa';
import { Link as RouterLink } from 'react-router-dom';

const VendorSignUp = () => {
  return (
    <Box bg="brown.50" py={10} color="brown.800" textAlign="center">
      <Container maxW="container.xl">
        <Heading as="h2" size="xl" mb={4}>
          Join us as a Vendor
        </Heading>
        <Text fontSize="lg" mb={6}>
          Showcase your products and services and connect with thousands of potential customers looking for what you offer.
        </Text>
        <Grid templateColumns={{ base: '1fr', md: 'repeat(3, 1fr)' }} gap={8} mb={8}>
          <GridItem>
            <HStack spacing={2} alignItems="center" justifyContent="center">
              <FaShoppingCart size={32} color="green.500" />
              <Text fontWeight="bold">Increased Sales</Text>
            </HStack>
          </GridItem>
          <GridItem>
            <HStack spacing={2} alignItems="center" justifyContent="center">
              <FaBullhorn size={32} color="blue.500" />
              <Text fontWeight="bold">Increased Visibility</Text>
            </HStack>
          </GridItem>
          <GridItem>
            <HStack spacing={2} alignItems="center" justifyContent="center">
              <FaStar size={32} color="yellow.500" />
              <Text fontWeight="bold">Build Your Reputation</Text>
            </HStack>
          </GridItem>
        </Grid>
        <Button
          as={RouterLink}
          to="/list-your-business"
          colorScheme="brown"
          size="lg"
        >
      List Your Business
    </Button>
      </Container>
    </Box>
  );
};

export default VendorSignUp;
