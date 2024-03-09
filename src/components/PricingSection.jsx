import { Box, Heading, SimpleGrid, Text, Badge, VStack, Button } from '@chakra-ui/react';

const PricingSection = () => {
  const pricingOptions = [
    {
      title: 'Basic',
      price: '$150',
      features: [
        '1-Hour Photoshoot',
        '10 High-Res Images',
        'Photo Editing',
        'Online Gallery Access'
      ],
      popular: false
    },
    {
      title: 'Standard',
      price: '$300',
      features: [
        '2-Hour Photoshoot',
        '20 High-Res Images',
        'Advanced Photo Editing',
        'Online Gallery Access',
        '1 Print Included'
      ],
      popular: true
    },
    {
      title: 'Premium',
      price: '$500',
      features: [
        'Half-Day Photoshoot',
        '40 High-Res Images',
        'Professional Photo Editing',
        'Online Gallery Access',
        '3 Prints Included'
      ],
      popular: false
    }
  ];

  return (
    <Box id="pricing" p={5} my={10}>
      <Heading mb={4} textAlign="center">Pricing Packages</Heading>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
        {pricingOptions.map((option, index) => (
          <VStack
            key={index}
            borderWidth="1px"
            borderRadius="lg"
            p={5}
            align="stretch"
            bg={option.popular ? 'orange.100' : 'gray.50'}
            position="relative"
          >
            {option.popular && (
              <Badge variant="solid" colorScheme="orange" position="absolute" top="-10px" right="-10px">
                Popular
              </Badge>
            )}
            <Heading size="md" py={2} alignSelf="center">
              {option.title}
            </Heading>
            <Text fontSize="3xl" fontWeight="bold" py={2} alignSelf="center">
              {option.price}
            </Text>
            <VStack align="start" py={2}>
              {option.features.map((feature, featureIndex) => (
                <Text key={featureIndex}>{feature}</Text>
              ))}
            </VStack>
            <Button colorScheme="brown" variant={option.popular ? 'solid' : 'outline'} mt={4} alignSelf="center">
              Choose {option.title}
            </Button>
          </VStack>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default PricingSection;
