import { Box, Text, Flex, useTheme } from '@chakra-ui/react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function FeaturedVendor({  id, title, subtitle, imageSrc }) {
  const theme = useTheme();

  return (
    <Box
      maxW="100%"
      height="250px"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      position="relative"
      bgImage={`url(${imageSrc})`}
      bgPos="center"
      bgSize="cover"
      display="flex"             // Make this a flex container
      alignItems="center"        // Align children vertically
      justifyContent="center"    // Align children horizontally
      p="4"                      // Add padding to the container
      _hover={{
        transform: 'scale(1.05)',
        transition: 'transform .2s',
        zIndex: 10,
      }}
    >
      {/* Box Content */}
      <Box
        p="6"
        bg="rgba(255, 255, 255, 0.8)"
        shadow="lg"
        textAlign="center"        // Center text
        borderRadius=""       
      >
        <Flex justifyContent="center" alignItems="center">
          <Box borderBottom="2px" borderColor="black" width="30px" mr="3" />
          <Link to={`/vendor/${id}`}> <Text fontWeight="bold" textTransform="uppercase" fontSize="xl" fontFamily={theme.fonts.heading}>
            {title}
          </Text></Link>
          <Box borderBottom="2px" borderColor="black" width="30px" ml="3" />
        </Flex>

        <Text mt="4" fontFamily={theme.fonts.body}>
          {subtitle}
        </Text>
      </Box>
    </Box>
  );
}

FeaturedVendor.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
};

export default FeaturedVendor;
