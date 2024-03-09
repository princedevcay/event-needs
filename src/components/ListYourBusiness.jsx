import { Box, Heading, Text, VStack, Container } from '@chakra-ui/react';
import heroImage from '../assets/blog-sample.jpg';
import Header from './Header'
import Footer from './Footer'
import HowItWorks from './HowItWorks';
import FAQ from './FAQ';
import RegistrationForm from './RegistrationForm';
import Testimonials from './Testimonials';

const ListYourBusiness = () => {
  return (
    <>
    <Header/>
    <Box>
      <Box
        position="relative"
        bgImage={`url(${heroImage})`}
        bgSize="cover"
        bgPosition="center"
        py={20}
        px={10}
        mb={10}
        textAlign="center"
        color="white"
        overflow="hidden"
      >
        {/* Black texture overlay */}
        <Box
          position="absolute"
          top={0}
          left={0}
          w="full"
          h="full"
          bg="rgba(0, 0, 0, 0.5)" // Adjust the opacity as needed (0.5 for 50% opacity)
          zIndex={0}
        />

        {/* Content */}
        <VStack zIndex={1} position="relative" spacing={4} justify="center" h="full">
          <Container maxW="container.xl">
            <Heading as="h1" size="2xl" color="white" mb="4">
              Grow Your Business with Us
            </Heading>
            <Text color="white" fontSize="xl" maxW="xl" mx="auto" mb="4">
              Join our platform and showcase your products and services to connect with thousands of potential customers looking for what you offer.
            </Text>
          </Container>
        </VStack>
      </Box>
      <HowItWorks/>
      <Testimonials/>
      <RegistrationForm/>
      {/* Add the rest of your ListYourBusiness content here */}
      {/* For example: form, steps, information, etc. */}
      <FAQ/>
    </Box>
    <Footer/>
    </>
  );
};

export default ListYourBusiness;
