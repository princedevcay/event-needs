import React, { useState, useRef } from 'react';
import axios from 'axios';
import {
    FormControl,
    FormLabel,
    Input,
    Button,
    useToast,
    Flex,
    Box,
    Tabs,
    TabList,
    Tab,
    TabPanels,
    TabPanel,
    Container,
    Grid,
    GridItem,
    Heading,
    Text,
    SimpleGrid,
    Badge,
    VStack,
    Checkbox,
    Link
    
} from '@chakra-ui/react';

const packages = [
    {
        name: 'Basic Package',
        price: 130,
        description: `
          <ul>
            <li>Listing on website</li>
            <li>Basic profile page</li>
            <li>Access to customer inquiries</li>
            <li>Two(2) posts per month on our platform's social media channels</li>
            <li>Estimated Reach: Up to 1000 views and 50 likes per post</li>
          </ul>
        `,
        buyLink: 'https://buy.stripe.com/test_eVa8Ak5nK6np5lmdQT',
      },
      {
        name: 'Standard Package',
        price: 210,
        description: `
          <ul>
            <li>Enhanced listing</li>
            <li>Featured profile page</li>
            <li>Priority access to customer inquiries</li>
            <li>Ability to post special offers</li>
            <li>Enhanced listing</li>
            <li>Featured profile page</li>
            <li>Priority access to customer inquiries</li>
            <li>5 posts per month across all our social media channels</li>
            <li>One(1) featured story per month</li>
            <li>Estimated Reach: Up to 1500 views and 150 likes per post</li>
          </ul>
        `,
        buyLink: 'https://buy.stripe.com/test_8wM4k4aI49zB9BC9AC',
        isPopular: true,
      },
      {
        name: 'Premium Package',
        price: 290,
        description: `
          <ul>
            <li>All Standard Package features plus</li>
            <li>Video hosting</li>
            <li>Top-tier listing, access to premium customer leads</li>
            <li>10 posts per month</li>
            <li>2 featured stories</li>
            <li>1 sponsored post per month targeting specific audiences</li>
            <li>Estimated Reach: Up to 3000 views and 350 likes per post, with increased engagement on sponsored posts</li>
          </ul>
        `,
        buyLink: 'https://buy.stripe.com/test_7sI03O6rO6np7tu6op',
      },
      {
        name: 'Unlimited Package',
        price: 370,
        description: `
          <ul>
            <li>All Premium Package features plus</li>
            <li>Personalized branding options</li>
            <li>Dedicated account manager</li>
            <li>Analytics reports</li>
            <li>20 posts per month</li>
            <li>Weekly featured stories</li>
            <li>2 sponsored posts per month</li>
            <li>Social media campaign tailored to vendor's brand</li>
            <li>Estimated Reach: 5,000+ views, 500+ likes per post, highest engagement and targeted reach for sponsored content.</li>
          </ul>
        `,
        buyLink: 'https://buy.stripe.com/test_eVa3g0aI4279eVW4gg',
      },
    ];


const RegistrationForm = () => {
    const [formData, setFormData] = useState({
        vendorName: '',
        username: '',
        email: '',
        slug: '',
        vendorEmail: '',
        password: '',
        companyName: '',
        contactPerson: '',
        businessAddress: '',
        phone: '',
        website: '',
        primaryService: '',
        secondaryService: '',
        yearsInService: '',
        references: '',
        companySize: '',
        availableYearRound: '',
        eventsPerMonth: '',
        feesBreakdown: '',
        customizablePackages: '',
        hasAgreement: '',
        setupTearDown: '',
        spaceEquipmentRequirements: '',
        licensed: '',
        hasInsurance: '',
        menuOptions: '',
        dietaryRestrictions: '',
        cancellationPolicy: '',
        refundPolicy: '',
        additionalServices: '',
        sustainablePractices: '',
        selectedPackage: '',
    });
    const [loading, setLoading] = useState(false);
    const [selectedPackage, setSelectedPackage] = useState(null);
    const [currentTab, setCurrentTab] = useState(0);
    const toast = useToast();
    const [agreeToTerms, setAgreeToTerms] = useState(false);
    const firstInputRef = useRef();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };    

    const handlePackageSelect = (packageName) => {
        const selectedPackage = packages.find(pkg => pkg.name === packageName);
        setSelectedPackage(selectedPackage);
        setFormData({ ...formData, selectedPackage: selectedPackage.name }); // Update formData with selected package
        setCurrentTab(1); // Move to the second tab after selecting a package
    };
    
    

    const handleNext = () => {
        setCurrentTab(2); // Move to the third tab when "Next" button is clicked
    };

    const handleAgreeToTerms = () => {
        setAgreeToTerms(!agreeToTerms);
      };

    const handleBuyNow = async () => {
        try {
            setLoading(true);

            // Perform registration
            const response = await axios.post('https://event-needs.com/backend/wp-json/custom/v1/register', formData);

            if (response.status === 200) {
                // Registration successful
                toast({
                    title: 'Registration Successful',
                    description: 'Welcome aboard! Redirecting to the buy page...',
                    status: 'success',
                    duration: 5000,
                    isClosable: true,
                });

                // Log registration details
            console.log('Registration Details:', formData);

                // Redirect the user after successful registration
                window.location.href = selectedPackage.buyLink;
            } else {
                // Registration failed
                throw new Error('Registration failed');
            }
        } catch (error) {
            // Handle registration errors
            console.error('User registration error:', error);
            toast({
                title: 'Registration Failed',
                description: 'Failed to register user. Please try again later.',
                status: 'error',
                duration: 5000,
                isClosable: true,
            });
        } finally {
            setLoading(false);
        }
    };

    return (
            <Container maxW="container.xl" mx="auto" mt={8} p={4}>
            <Heading as="h2" size="xl" textAlign="center" mb={2}>
            Subscribe to a Package
            </Heading>
            <Text textAlign="center" mb={4}>
            Choose from our variety of subscription packages to get started!
            </Text>
            <Tabs index={currentTab} isFitted variant="enclosed">
            <TabList mb={4} color={"brown"}>
                <Tab>Packages</Tab>
                <Tab>Registration Details</Tab>
                <Tab>Payment</Tab>
            </TabList>
                    <TabPanels>
                    <TabPanel>
            <SimpleGrid columns={{ base: 1, md: 4 }} spacing={10}>
              {packages.map((pkg, index) => (
                <VStack
                  key={index}
                  borderWidth="1px"
                  borderRadius="lg"
                  p={5}
                  align="stretch"
                  bg={pkg.isPopular ? 'orange.100' : 'gray.50'}
                  position="relative"
                  top={pkg.isPopular ? '-20px' : '0'}
                  zIndex={pkg.isPopular ? '1' : 'auto'}
                  height={pkg.isPopular ? '730px' : '700px'}
                >
                  {pkg.isPopular && (
                    <Badge variant="solid" colorScheme="orange" position="absolute" top="-10px" right="-10px">
                      Popular
                    </Badge>
                  )}
                  <Heading size="md" py={2} alignSelf="center">
                    {pkg.name}
                  </Heading>
                  <Text fontSize="3xl" fontWeight="bold" py={2} alignSelf="center">
                    £{pkg.price} <span style={{ fontSize: 'small' }}>per year</span>
                  </Text>
                  <VStack align="center" py={2}>
                    <Heading size="sm">Features</Heading>
                    <div dangerouslySetInnerHTML={{ __html: `<ul style="padding: 0 20px;">${pkg.description}</ul>` }} />
                  </VStack>
                  <Button colorScheme="brown" onClick={() => handlePackageSelect(pkg.name)} variant={pkg.isPopular ? 'solid' : 'outline'} mt={4} alignSelf="center">
                        Select
                    </Button>
                </VStack>
              ))}
            </SimpleGrid>
          </TabPanel>

          <TabPanel>
          <Heading fontSize="xl" mb={3}>Account Information</Heading>
    <Grid templateColumns="repeat(3, 1fr)" gap={6}>
        <FormControl isRequired>
            <FormLabel>Username</FormLabel>
            <Input type="text" name="username" value={formData.username} onChange={handleInputChange} ref={firstInputRef} />
        </FormControl>
        <FormControl isRequired>
            <FormLabel>Name</FormLabel>
            <Input type="text" name="slug" value={formData.slug} onChange={handleInputChange} />
        </FormControl>
        <FormControl isRequired>
            <FormLabel>Email Address</FormLabel>
            <Input type="email" name="email" value={formData.email} onChange={handleInputChange} />
        </FormControl>
        <FormControl isRequired>
            <FormLabel>Phone</FormLabel>
            <Input type="text" name="phone" value={formData.phone} onChange={handleInputChange} />
        </FormControl>
        <FormControl isRequired>
            <FormLabel>Business website or social media URL (e.g. Instagram) </FormLabel>
            <Input type="text" name="website" value={formData.website} onChange={handleInputChange} />
        </FormControl>
    </Grid>
    <Heading fontSize="xl" mb={3}>Vendor Information</Heading>
    <Grid templateColumns="repeat(3, 1fr)" gap={6} mb={4}>
        <FormControl isRequired>
            <FormLabel>Vendor Name</FormLabel>
            <Input type="text" name="vendorName" value={formData.vendorName} onChange={handleInputChange} />
        </FormControl>
        <FormControl isRequired>
            <FormLabel>Vendor Email</FormLabel>
            <Input type="email" name="vendorEmail" value={formData.vendorEmail} onChange={handleInputChange} />
        </FormControl>
        <FormControl isRequired>
            <FormLabel>Primary Service</FormLabel>
            <Input type="text" name="primaryService" value={formData.primaryService} onChange={handleInputChange} />
        </FormControl>
        <FormControl isRequired>
            <FormLabel>Secondary Service</FormLabel>
            <Input type="text" name="secondaryService" value={formData.secondaryService} onChange={handleInputChange} />
        </FormControl>
        <FormControl isRequired>
            <FormLabel>Contact Person</FormLabel>
            <Input type="text" name="contactPerson" value={formData.contactPerson} onChange={handleInputChange} />
        </FormControl>
        <FormControl isRequired>
            <FormLabel>Years In Service</FormLabel>
            <Input type="number" name="yearsInService" value={formData.yearsInService} onChange={handleInputChange} />
        </FormControl>
        <FormControl isRequired>
            <FormLabel>Company Name</FormLabel>
            <Input type="text" name="companyName" value={formData.companyName} onChange={handleInputChange} />
        </FormControl>
        <FormControl isRequired>
            <FormLabel>Business Address</FormLabel>
            <Input type="text" name="businessAddress" value={formData.businessAddress} onChange={handleInputChange} />
        </FormControl>
       
    </Grid>
    <Button onClick={handleNext} mt={4} colorScheme="brown">Next</Button>
</TabPanel>

                        <TabPanel>
                            {selectedPackage && (
                        <VStack spacing={4}>
                            <Heading as="h3" size="md" mb={2}>Selected Package: {selectedPackage.name}</Heading>
                            <Text textAlign="center" mb={2}>Price: £{selectedPackage.price} per year</Text>
                            <Text textAlign="center">Please read and agree to the <Link color="brown.500" href="/terms-and-conditions" textDecoration="none" target="_blank">Terms & Conditions</Link> before proceeding.</Text>
                            <Checkbox isChecked={agreeToTerms} colorScheme='brown' onChange={handleAgreeToTerms}>I agree to the Terms & Conditions</Checkbox>
                            <Button colorScheme="brown" onClick={handleBuyNow} mt={2} alignSelf="center">
                            Proceed to Stripe Checkout
                            </Button>
                        </VStack>
                        )}
            {!selectedPackage && (
              <Text textAlign="center">Please select a package before proceeding to payment.</Text>
            )}
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </Container>
    );
};

export default RegistrationForm;
