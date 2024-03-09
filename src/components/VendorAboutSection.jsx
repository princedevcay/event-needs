import React from 'react';
import { Box, Heading, Text, HStack, Link, Icon, VStack } from '@chakra-ui/react';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaGlobe } from 'react-icons/fa';
import { BsStarFill } from 'react-icons/bs';

const VendorAboutSection = ({ vendor }) => {
  if (!vendor) {
    return <Box></Box>;
  }

  const {
    title,       // WordPress title
    content,     // WordPress content
    acf          // ACF fields
  } = vendor;

  const socialIcons = {
    facebook: FaFacebook,
    twitter: FaTwitter,
    instagram: FaInstagram,
    youtube: FaYoutube,
    website: FaGlobe
  };

  // Assuming 'rating', 'citytown', and 'country' are keys in the ACF data
  const { rating, citytown, country } = acf;

  return (
    <VStack align="start" spacing={4}>
      <Heading as="h1" size="xl">{title?.rendered}</Heading>
      <Text dangerouslySetInnerHTML={{ __html: content?.rendered }} />

      {rating && (
        <HStack spacing={1}>
          {Array.from({ length: 5 }, (_, index) => (
            <Icon
              as={BsStarFill}
              key={index}
              color={index < rating ? "yellow.400" : "gray.300"}
            />
          ))}
          <Text as="span">({rating})</Text>
        </HStack>
      )}

      {citytown && country && (
        <Text fontSize="sm">{citytown}, {country}</Text>
      )}

      <HStack spacing={2}>
        {Object.entries(acf || {}).map(([key, value]) => {
          if (socialIcons[key]) {
            return (
              value && <Link href={value} isExternal key={key}>
                <Icon as={socialIcons[key]} w={5} h={5} />
              </Link>
            );
          }
          return null;
        })}
      </HStack>
    </VStack>
  );
};

export default VendorAboutSection;
