import { Box, Container, Heading, Text } from '@chakra-ui/react';

function ClearValueProposition() {
  return (
  
    <Box textAlign="center" py={10} color="brown.800" bg="brown.50" shadow="0 -2px 4px 0 rgba(0,0,0,0.10)">
    <Container  maxW="container.xl" py={5}>
      <Heading as="h2" size="xl" fontFamily="heading">
        Why Choose Event-Needs?
      </Heading>
      <Text mt={4} fontFamily="body">
      Event-Needs was established in 2023 with the vision of simplifying the search for quality African event vendors. Our platform reduces the time, cost, and effort typically required to plan an event, allowing users to focus on celebration. We offer a range of certified vendors, including caterers, event planners, venue finders, photographers, stylists, makeup artists, DJs, Masters of Ceremonies, decorators, and more.
      </Text>
      </Container>
    </Box>
   
  );
}

export default ClearValueProposition;
