import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Heading, Container, Box, VStack, Flex } from '@chakra-ui/react'
import api from '../../api'
import Header from '../Header.jsx';
import Footer from '../Footer.jsx';
import VendorAboutSection from '../../components/VendorAboutSection'
import ReviewSection from '../../components/ReviewSection'
import PricingSection from '../../components/PricingSection';
import PhotographyServicesSection from '../../components/PhotographyServicesSection'
import VendorSlider from '../VendorSlider';
import ContactForm from '../ContactForm.jsx';

function SingleVendor() {
  const images = [/* array of image URLs */];
  const { vendorId } = useParams();
  const [vendor, setVendor] = useState(null);

  useEffect(() => {
    api.get(`vendor/${vendorId}`) 
      .then(response => {
        setVendor(response.data);
      })
      .catch(err => {
        console.error('Error loading vendor:', err);
      });
  }, [vendorId]);

  return (
    <>
    <Header/>
    <VStack spacing={4} color="brown.800" bg="brown.50" p={4} mb={10}>
        </VStack>
     <Container maxWidth="container.xl" px={4}>
      <VendorSlider/>
      <Flex
        direction={{ base: "column", md: "row" }}
        gap="20px"
      >
        <Box flex="2">
        {vendor && (
          <>
            <VendorAboutSection vendor={vendor} />
            <PhotographyServicesSection />
            <PricingSection />
            <ReviewSection />
          </>
        )}
        </Box>
        <Box
          flex="1"
          position={{ md: "sticky" }}
          top="20px"
          alignSelf={{ md: "flex-start" }}
        >
          <ContactForm />
        </Box>
      </Flex>
    </Container>
    <Footer/>
    </>
  );
}

export default SingleVendor;
