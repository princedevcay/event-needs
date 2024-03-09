import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Box, Center, Container, Heading, Text, Button } from '@chakra-ui/react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import FeaturedVendor from './FeaturedVendor'; // Make sure this path is correct

// Assuming api is set up correctly (e.g., using Axios)
import api from '../api';

export const fetchVendors = async () => {
    try {
        const response = await api.get('vendor'); // Adjust if your endpoint URL is different
        const vendors = response.data;

        // Fetch featured image URLs for each vendor
        const vendorsWithImages = await Promise.all(vendors.map(async (vendor) => {
            if (vendor.featured_media) {
                const mediaResponse = await api.get(`media/${vendor.featured_media}`);
                const media = mediaResponse.data;
                vendor.featured_image_url = media.source_url; // Assuming 'source_url' contains the image URL
            }
            return vendor;
        }));

        return vendorsWithImages;
    } catch (error) {
        console.error('Error fetching vendors:', error);
        throw error;
    }
};

function FeaturedVendorsList() {
    const [vendors, setVendors] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);
        fetchVendors()
            .then(data => {
                setVendors(data);
                setLoading(false);
            })
            .catch(err => {
                console.error('Error fetching vendors:', err);
                setError(err);
                setLoading(false);
            });
    }, []);

    // Slider settings
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <Box py={10}>
            <Container maxW="container.xl" borderRadius="xl">
                <Heading as="h2" size="xl" textAlign="center" mb={4}>
                    Featured Vendors
                </Heading>
                <Text textAlign="center" mt={2} mb={6} fontFamily="body">
                    Browse The List Of Featured Vendors 
                </Text>
                {loading && <Center>Loading...</Center>}
                {error && <Center>Error: {error.message}</Center>}
                {!loading && !error && (
                    <Slider {...settings}>
                        {vendors.map(vendor => (
                            <Box key={vendor.id} px={6}>
                                <FeaturedVendor 
                                     id={vendor.id}
                                    title={vendor.title.rendered}
                                    subtitle={vendor.acf.subtitle}
                                    imageSrc={vendor.featured_image_url}
                                />
                            </Box>
                        ))}
                    </Slider>
                )}
                <Center mt={10}>
                    <Button colorScheme="brown" variant="solid">
                        Browse more Vendors
                    </Button>
                </Center>
            </Container>
        </Box>
    );
}

export default FeaturedVendorsList;
