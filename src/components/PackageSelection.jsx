import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';


import {
  Box,
  Heading,
  Button,
  SimpleGrid,
  Badge,
  UnorderedList,
  ListItem,
  Center,
  Text,
} from '@chakra-ui/react';

const PackageSelection =({ onNext }) => {
  const { packages, loading, error } = useSelector((state) => state.packages);
  const sortedPackages = packages.slice().sort((a, b) => a.price - b.price);
  const dispatch = useDispatch();
 

  useEffect(() => {
    dispatch(fetchPackages());
  }, [dispatch]);

  if (loading) return <Box>Loading packages...</Box>;
  if (error) return <Box>Error loading packages: {error}</Box>;

  const handleSelectPackage = (selectedPackage) => {
    // Update the selected package in the registration data
    onNext({ selectedPackage });
  };

  return (
      <SimpleGrid columns={{ sm: 1, md: 4 }} spacing={6}>
        {sortedPackages.map((pkg) => (
          <Box
            key={pkg._id}
            borderWidth="1px"
            borderRadius="md"
            overflow="hidden"
            p={4}
            boxShadow="md"
            bg={"white"}
          >
            <Heading as="h3" size="lg" marginBottom="2">
              {pkg.title}
              {pkg.isPopular && (
                <Badge colorScheme="brown" ml={2}>
                  Popular
                </Badge>
              )}
            </Heading>
            <Text fontSize="xl" fontWeight="bold" mb={2}>
              Price: ${pkg.price}
            </Text>
            <UnorderedList>
              {pkg.features.map((feature, index) => (
                <ListItem key={index}>{feature}</ListItem>
              ))}
            </UnorderedList>
            <Center mt={50}>
            <Button colorScheme="brown" onClick={() => handleSelectPackage(pkg)}>
            Select
          </Button>
            </Center>
          </Box>
        ))}
      </SimpleGrid>
   
  );
};

export default PackageSelection;
