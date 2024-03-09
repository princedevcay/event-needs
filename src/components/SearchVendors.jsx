import React from 'react';
import { Box, Input, Select, Button, SimpleGrid } from '@chakra-ui/react';

const SearchVendors = () => {
  // State and functions to handle form input would go here
  // ...

  return (
    <Box width="full" p={4} boxShadow="lg" bgColor={"white"} borderRadius={"xl"}>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={4} alignItems="center">
        {/* Search Input */}
        <Input 
          placeholder="Search event vendors" 
          // onChange={...} // Handle input changes
        />

        {/* Vendor Category Select */}
        <Select
          placeholder="Select category"
          // onChange={...} // Handle selection changes
        >
          <option value="photography">Photography</option>
          <option value="dj">DJ</option>
          <option value="catering">Catering</option>
          {/* ... more categories ... */}
        </Select>

        {/* Search Button */}
        <Button
          colorScheme="brown"
          // onClick={...} // Handle the search action
        >
          Search
        </Button>
      </SimpleGrid>
    </Box>
  );
};

export default SearchVendors;
