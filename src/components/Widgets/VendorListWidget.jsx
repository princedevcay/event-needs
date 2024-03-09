import React, { useState, useEffect } from 'react';
import { getToken } from '../../services/postService'
import { Box, Grid, Heading, Text, Flex } from '@chakra-ui/react';
import { fetchVendors, fetchUserProfile } from '../../services/postService';
import { MdLocationOn, MdEmail, MdPhone, MdBusiness, MdAttachMoney, MdLanguage, MdCategory, MdDescription, MdDateRange } from 'react-icons/md';

const VendorListWidget = ({ username }) => {
    const [authorId, setAuthorId] = useState(null);
    const [vendors, setVendors] = useState([]);

    useEffect(() => {
        const fetchAuthorId = async () => {
            try {
                const token = getToken();
                const userProfile = await fetchUserProfile(token);
                if (userProfile.username === username) {
                    setAuthorId(userProfile.id);
                }
            } catch (error) {
                console.error('Error fetching user profile:', error);
            }
        };

        fetchAuthorId();
    }, [username]);

    useEffect(() => {
        if (authorId) {
            const fetchVendorsData = async () => {
                try {
                    const token = getToken();
                    const vendorsData = await fetchVendors(token);
                    const filteredVendors = vendorsData.filter(vendor => vendor.author === authorId);
                    setVendors(filteredVendors.map(vendor => ({
                        ...vendor,
                        excerpt: stripHtmlTags(vendor.excerpt.rendered),
                    })));
                } catch (error) {
                    console.error('Error fetching vendors:', error);
                }
            };

            fetchVendorsData();
        }
    }, [authorId]);

    const stripHtmlTags = (html) => {
        return html.replace(/<[^>]+>/g, '');
    };

    return (
        <Grid templateColumns={{ base: '1fr', md: 'repeat(3, 1fr)', lg: '1fr' }} gap={4}>
            {vendors.map(vendor => (
                <Box key={vendor.id} p={4} boxShadow="md" borderRadius="md" borderWidth="1px" borderColor="black" bg="brown.500" color="white" w={{ base: 'full', md: 'auto' }}>
                    <Heading size="md" mb={2}>{vendor.title.rendered}</Heading>
                    <Flex direction={{ base: 'column', md: 'row' }} mb={2}>
                        <Flex align="center" mr={{ base: 0, md: 4 }} mb={{ base: 2, md: 0 }}>
                            <MdLocationOn size={20} />
                            <Text ml={2}>{vendor.acf.businessAddress}</Text>
                        </Flex>
                        <Flex align="center" mr={{ base: 0, md: 4 }} mb={{ base: 2, md: 0 }}>
                            <MdEmail size={20} />
                            <Text ml={2}>{vendor.acf.vendorEmail}</Text>
                        </Flex>
                        <Flex align="center" mb={{ base: 2, md: 0 }}>
                            <MdPhone size={20} />
                            <Text ml={2}>{vendor.acf.phone}</Text>
                        </Flex>
                    </Flex>
                    <Flex direction={{ base: 'column', md: 'row' }} mb={2}>
                        <Flex align="center" mr={{ base: 0, md: 4 }} mb={{ base: 2, md: 0 }}>
                            <MdBusiness size={20} />
                            <Text ml={2}>Contact Person: {vendor.acf.contactPerson }</Text>
                        </Flex>
                        <Flex align="center" mr={{ base: 0, md: 4 }} mb={{ base: 2, md: 0 }}>
                            <MdAttachMoney size={20} />
                            <Text ml={2}>Fees Breakdown: {vendor.acf.feesBreakdown}</Text>
                        </Flex>
                        <Flex align="center" mb={{ base: 2, md: 0 }}>
                            <MdLanguage size={20} />
                            <Text ml={2}>Website: {vendor.acf.website}</Text>
                        </Flex>
                    </Flex>
                    <Flex direction={{ base: 'column', md: 'row' }} mb={2}>
                        <Flex align="center" mr={{ base: 0, md: 4 }} mb={{ base: 2, md: 0 }}>
                            <MdBusiness size={20} />
                            <Text ml={2}>Primary Service: {vendor.acf.primaryService}</Text>
                        </Flex>
                        <Flex align="center" mr={{ base: 0, md: 4 }} mb={{ base: 2, md: 0 }}>
                            <MdBusiness size={20} />
                            <Text ml={2}>Secondary Services: {vendor.acf.secondaryService}</Text>
                        </Flex>
                        <Flex align="center" mb={{ base: 2, md: 0 }}>
                            <MdLanguage size={20} />
                            <Text ml={2}>{vendor.acf.website}</Text>
                        </Flex>
                    </Flex>
                    <Flex direction={{ base: 'column', md: 'row' }} mb={2}>
                        <Flex align="center" mr={{ base: 0, md: 4 }} mb={{ base: 2, md: 0 }}>
                            <MdDateRange size={20} />
                            <Text ml={2}>Years In Service: {vendor.acf.yearsInService} years</Text>
                        </Flex>
                        <Flex align="center" mr={{ base: 0, md: 4 }} mb={{ base: 2, md: 0 }}>
                            <MdBusiness size={20} />
                            <Text ml={2}>Secondary Services: {vendor.acf.companySize}</Text>
                        </Flex>
                        <Flex align="center" mb={{ base: 2, md: 0 }}>
                            <MdBusiness size={20} />
                            <Text ml={2}>Licensed Business: {vendor.acf.licensed}</Text>
                        </Flex>
                    </Flex>
                </Box>
            ))}
            {vendors.length === 0 && (
                <Box p={4} boxShadow="md">
                    <Text>No vendors currently assigned to you.</Text>
                </Box>
            )}
        </Grid>
    );
};

export default VendorListWidget;
