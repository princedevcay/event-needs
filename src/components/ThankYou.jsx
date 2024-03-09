import { Flex, Text, Container } from '@chakra-ui/react';
import Header from '../components/Header'
import Footer from '../components/Footer';


const ThankYouPage = () => {
  return (
    <>
    <Header/>
    <Flex p={8} justifyContent="center" align="center">
      <Container maxW="container.xl" borderRadius="xl">
        <Text fontSize="xl" fontWeight="bold" textAlign="center" mb={4}>
        Thank you for taking the time to complete this questionnaire</Text>
        <Text fontSize="lg" textAlign="center">
          Your responses have been received, and we appreciate your time and participation.
          We'll be in touch with further details.
        </Text>
      </Container>
    </Flex>
    <Footer/>
    </>
  );
};

export default ThankYouPage;
