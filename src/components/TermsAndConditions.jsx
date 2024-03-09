import { Container, Heading, Text, OrderedList, ListItem } from '@chakra-ui/react';
import Header from '../components/Header'
import Footer from '../components/Footer'

const TermsAndConditions = () => {
  return (
    <>
    <Header/>
    <Container maxW="container.xl" mt={8} p={4}>
      <Heading as="h2" size="lg" mb={4}>Vendor Terms and Conditions</Heading>
      <OrderedList>
        <ListItem>
          <Text><b>Registration and Account</b></Text>
          <OrderedList ml={4}>
            <ListItem>To become a vendor on Event-Needs, you must complete the registration process and create an account. You are responsible for maintaining the confidentiality of your account information.</ListItem>
            <ListItem>You agree to provide accurate and up-to-date information during the registration process and promptly update it if there are any changes.</ListItem>
          </OrderedList>
        </ListItem>
        <ListItem>
          <Text><b>Vendor Eligibility</b></Text>
          <OrderedList ml={4}>
            <ListItem>You must be in possession of all documents that makes you eligible to provide the product or service you offer through our platform. </ListItem>
            <ListItem>We reserve the right to reject or terminate your vendor account if you do not meet our eligibility criteria.</ListItem>
          </OrderedList>
        </ListItem>
        <ListItem>
          <Text><b>Vendor Listings</b></Text>
          <OrderedList ml={4}>
            <ListItem>You are responsible for the accuracy, completeness, and legality of the information provided in your product or service listings, including descriptions, pricing, and images.</ListItem>
            <ListItem>You must not list any products or services that infringe on the intellectual property rights of others.</ListItem>
          </OrderedList>
        </ListItem>
        <ListItem>
          <Text><b>Payment and Fees</b></Text>
          <OrderedList ml={4}>
            <ListItem>You agree to pay the applicable listing fees and any other fees associated with using our platform in a timely manner.</ListItem>
            <ListItem>We reserve the right to change listing fees and other charges with notice.</ListItem>
          </OrderedList>
        </ListItem>
        <ListItem>
          <Text><b>Transactions and Orders</b></Text>
          <OrderedList ml={4}>
            <ListItem>You agree to fulfill orders placed through our platform promptly and in accordance with the terms and conditions specified in your listings.</ListItem>
            <ListItem>You are responsible for providing accurate shipping and delivery information to customers.</ListItem>
          </OrderedList>
        </ListItem>
        <ListItem>
          <Text><b>Customer Service</b></Text>
          <OrderedList ml={4}>
            <ListItem>You are responsible for providing excellent customer service, including timely responses to customer inquiries and addressing customer issues or disputes.</ListItem>
          </OrderedList>
        </ListItem>
        <ListItem>
          <Text><b>Intellectual Property</b></Text>
          <OrderedList ml={4}>
            <ListItem>You must have the rights to use any intellectual property, including images, logos, and trademarks, included in your listings.</ListItem>
          </OrderedList>
        </ListItem>
        <ListItem>
          <Text><b>Termination</b></Text>
          <OrderedList ml={4}>
            <ListItem>We reserve the right to suspend or terminate your vendor account if you violate these terms and conditions or for any other reason deemed appropriate.</ListItem>
          </OrderedList>
        </ListItem>
        <ListItem>
          <Text><b>Liability</b></Text>
          <OrderedList ml={4}>
            <ListItem>Event-Needs is not responsible for any disputes between vendors and customers. Vendors are responsible for their own actions and services.</ListItem>
          </OrderedList>
        </ListItem>
        <ListItem>
          <Text><b>Data Privacy</b></Text>
          <OrderedList ml={4}>
            <ListItem>Event-Needs may collect and use vendor data as outlined in our Privacy Policy.</ListItem>
          </OrderedList>
        </ListItem>
        <ListItem>
          <Text><b>Governing Law and Jurisdiction</b></Text>
          <OrderedList ml={4}>
            <ListItem>These vendor terms and conditions are governed by and construed in accordance with the laws of the United Kingdom. Any disputes arising from or related to these terms and conditions shall be subject to the exclusive jurisdiction of the courts of the United Kingdom.</ListItem>
          </OrderedList>
        </ListItem>
        <ListItem>
          <Text><b>Contact Information</b></Text>
          <Text>If you have any questions or concerns about these vendor terms and conditions, please contact us at <a href="mailto:info@event-needs.com">info@event-needs.com</a>.</Text>
        </ListItem>
      </OrderedList>
    </Container>
    <Footer/>
    </>
  );
};

export default TermsAndConditions;
