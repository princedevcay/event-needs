// ContactForm.jsx
import { VStack, Input, Textarea, Button, Heading, Box } from '@chakra-ui/react';

const ContactForm = () => {
  // Form handling logic

  return (
    <Box
      p={4} // Padding
      borderWidth="1px" // Border width
      borderRadius="md" // Border radius for rounded corners
      boxShadow="lg" // Shadow
      borderColor="gray.200" // Border color, adjust as needed
      bg="white" // Background color, adjust as needed
    >
    <VStack as="form" spacing={4} /* onSubmit={...} */>
      <Heading>Contact Vendor</Heading>
      <Input placeholder="Your Name" />
      <Input placeholder="Your Email" />
      <Textarea placeholder="Your Message" />
      <Button type="submit" colorScheme="brown">Send Message</Button>
    </VStack>
    </Box>
  );
};

export default ContactForm;
