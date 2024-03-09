import React, { useState, useEffect } from 'react';
import { Box, Image, Badge, Text, useToken, Button } from '@chakra-ui/react';
import { StarIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';
import api from '../../api';

function VendorCard({ vendor }) {
  const [featuredImageUrl, setFeaturedImageUrl] = useState('');
  const [categoryNames, setCategoryNames] = useState([]);
  const boxShadowColor = useToken('colors', 'gray.300');

  useEffect(() => {
    const fetchCategoryNames = async () => {
      try {
        if (vendor.acf && vendor.acf['vendor-category']) {
          // Check if vendor.acf['vendor-category'] is a string
          const categoryIds = Array.isArray(vendor.acf['vendor-category']) ? vendor.acf['vendor-category'] : vendor.acf['vendor-category'].split(',').map(category => category.trim());
          const categoryNamesResponse = await Promise.all(categoryIds.map(async categoryId => {
            const response = await api.get(`vendor-category/${categoryId}`);
            return response.data.name;
          }));
          setCategoryNames(categoryNamesResponse);
        }
      } catch (error) {
        console.error('Error fetching category names:', error);
      }
    };
  
    fetchCategoryNames();
  }, [vendor.acf]);
  

  useEffect(() => {
    const fetchFeaturedImage = async () => {
      try {
        if (vendor.featured_media !== 0) {
          const response = await api.get(`media/${vendor.featured_media}`);
          const imageUrl = response.data.source_url;
          setFeaturedImageUrl(imageUrl);
        }
      } catch (error) {
        console.error('Error fetching featured image:', error);
      }
    };

    fetchFeaturedImage();
  }, [vendor.featured_media]);

  const { title, excerpt, acf, id } = vendor;

  const removeHTMLTags = (text) => {
    return text.replace(/<[^>]*>?/gm, '');
  };

  return (
    <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" pos="relative"
      _hover={{ transform: 'translateY(-5px)', transition: 'all 0.3s', boxShadow: `0 4px 6px 0 ${boxShadowColor}` }}>
      {featuredImageUrl && (
        <Image src={featuredImageUrl} alt={`Image of ${title.rendered}`} objectFit="cover" height="200px" width="100%" />
      )}

      <Box p="6">
        <Badge borderRadius="full" px="2" colorScheme="brown" position="absolute" top="0" right="0" m="1">
          New
        </Badge>

        <Box mt="1" fontWeight="semibold" as="h4" lineHeight="tight" isTruncated>
          <Link to={`/vendor/${id}`}>
            {title.rendered}
          </Link>
        </Box>

        <Box display="flex" mt="2" alignItems="center">
          {Array(5)
            .fill('')
            .map((_, i) => (
              <StarIcon
                key={i}
                color={i < 3 ? "yellow.500" : "gray.300"}
              />
            ))}
          <Box as="span" ml="2" color="gray.600" fontSize="sm" mr="2">
            {acf?.reviewCount || 0} reviews
          </Box>
          <Text color="gray.600" fontSize="sm">
          {categoryNames.join(', ')}
          </Text>
        </Box>

        <Text mt={2}>
          {removeHTMLTags(excerpt.rendered)}
        </Text>
        <Button as={Link} to={`/vendor/${id}`} mt={4} colorScheme="brown" size="sm">
          View Vendor
        </Button>
      </Box>
    </Box>
  );
}

export default VendorCard;
