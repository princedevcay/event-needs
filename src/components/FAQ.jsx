import React from 'react';
import { Box, Heading, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Container } from '@chakra-ui/react';

const FAQ = () => {
  return (
    <Box py={10}>
      <Container maxW="container.xl">
        <Heading as="h2" size="xl" mb={6} textAlign="center">
          Frequently Asked Questions
        </Heading>
        <Accordion defaultIndex={[0]} allowMultiple>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  How do I sign up as a vendor?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              Signing up as a vendor is easy. Just visit our website and click on the "Sign Up" button. Fill out the required information, including details about your business and the services you offer. Once submitted, our team will review your application and get back to you as soon as possible.
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  How much does it cost to list my business?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              Listing your business on our platform is completely free. There are no upfront costs or subscription fees. You only pay a small commission when you successfully secure a booking through our platform.
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  How do I respond to customer inquiries?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              When a customer sends you an inquiry through our platform, you will receive a notification via email or through your dashboard. Simply log in to your account, view the inquiry, and respond directly to the customer through our messaging system. It's important to respond promptly to increase your chances of securing the booking.
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  Can I update my business information after signing up?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              Yes, you can update your business information at any time by logging in to your account and accessing your profile. From there, you can edit details such as your business name, contact information, services offered, and more.
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  How does the booking process work?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              The booking process is simple. When a customer sends you an inquiry, you will receive a notification. You can then review the details of the inquiry and respond with a quote or additional information. Once the customer accepts your offer, you can finalize the details of the booking and confirm it through our platform.
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Container>
    </Box>
  );
};

export default FAQ;
