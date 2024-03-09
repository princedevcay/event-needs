import { Box, Heading, SimpleGrid, Text, VStack, Circle, Container } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const MotionVStack = motion(VStack);

const HowItWorks = () => {
  const steps = [
    { id: 1, title: 'Create Your Profile', description: 'Sign up and set up your vendor profile to showcase your services and products.' },
    { id: 2, title: 'List Your Services', description: 'Add details about what you offer, including pricing, photos, and availability.' },
    { id: 3, title: 'Reach Your Audience', description: 'Use our platform to connect with thousands of potential clients looking for your services.' },
    { id: 4, title: 'Get Reviews', description: 'Build your reputation with customer reviews and increase your visibility on our platform.' },
    { id: 5, title: 'Grow Your Business', description: 'Enjoy increased bookings and business growth through our dedicated support and exposure.' },
  ];

  // Animation variants for framer-motion
  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <Box>
      <Container maxW="container.xl"  borderRadius={"xl"}>
      <Heading as="h2" size="xl" textAlign="center" mb={4}>
        How It Works
      </Heading>
      <Text textAlign="center" mt={2} mb={6} fontFamily="body">
        Our streamlined process ensures you can focus on what you do best — delivering outstanding services.
      </Text>
      <SimpleGrid columns={[1, null, 3, 5]} spacing={10} px={[4, null, 1]} py={10}>
        {steps.map((step) => (
          <MotionVStack
            key={step.id}
            spacing={4}
            borderWidth="1px"
            p={5}
            borderRadius="md"
            shadow='xl'
            bg="white"
            color="black"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.8 }}
            transition={{ duration: 0.5 }}
            variants={variants}
            _hover={{
              transform: "scale(1.05)",
              zIndex: 10,
            }}
          >
            <Circle size="40px" bg="brown.500" color="white">
              <Text fontSize="xl" fontWeight="bold" textAlign={"center"}>{step.id}</Text>
            </Circle>
            <Heading as="h4" size="md" textAlign={"center"}>{step.title}</Heading>
            <Text textAlign={"center"}>{step.description}</Text>
          </MotionVStack>
        ))}
      </SimpleGrid>
      </Container>
    </Box>
  );
};

export default HowItWorks;
