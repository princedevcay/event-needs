import {
  Box,
  Text,
  SimpleGrid,
  Link,
  Stack,
  Icon,
  Flex,
  Divider,
  Image, 
  useTheme
} from '@chakra-ui/react';
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaPinterestP,
  FaPhone,
  FaMapMarkerAlt,
  FaEnvelope,
} from 'react-icons/fa';
import image1 from '../assets/blog-sample.jpg'; 

const Footer = () => {
  const theme = useTheme();
  return (
    <Box backgroundColor="#1e1e1e" color="#fff" px={{ base: 100, md: 40 }} py={{ base:150, md:70 }}>
      <Flex
        direction={{ base: 'column', md: 'row' }}
        justifyContent={{ base: 'center', md: 'space-around' }}
        alignItems={{ base: 'center', md: 'flex-start' }}
        wrap="wrap"
        textAlign={{ base: 'center', md: 'left' }}
      >
        <Box flex="1" mb={{ base: '4', md: '0' }}>
          <Text fontSize="xl" fontFamily={theme.fonts.heading} fontWeight="bold">CONTACT</Text>
          <Text mt={2} mb={2}><Icon as={FaMapMarkerAlt} mr={2} mt={2} color="gray.300"/> United Kingdom</Text>
          <Text mb={2}><Icon as={FaPhone} mr={2} mt={2} color="gray.300" /> +44 7947898064</Text>
          <Text><Icon as={FaEnvelope} mr={2} mt={2} color="gray.300" /> info@event-needs.com</Text>
          <Stack direction="row" mt={4} spacing={6}>
            <Link href="#" isExternal _hover={{ textDecoration: 'none' }}>
              <Icon as={FaFacebookF} boxSize="6" color="#3b5998" />
            </Link>
            <Link href="#" isExternal _hover={{ textDecoration: 'none' }}>
              <Icon as={FaLinkedinIn} boxSize="6" color="#0e76a8" />
            </Link>
            <Link href="#" isExternal _hover={{ textDecoration: 'none' }}>
              <Icon as={FaInstagram} boxSize="6" color="#e1306c" />
            </Link>
            <Link href="#" isExternal _hover={{ textDecoration: 'none' }}>
              <Icon as={FaPinterestP} boxSize="6" color="#c8232c" />
            </Link>
          </Stack>
        </Box>
        <Box flex="1" minW="250px" mb={{ base: '4', md: '0' }}>
          <Text fontSize="xl" fontFamily={theme.fonts.heading} fontWeight="bold"> USEFUL LINKS</Text>
          <Stack mt={2} spacing={1}>
            <Link href="#" color="gray.400" _hover={{ color: 'gray.200' }}>
              Vendors
            </Link>
            <Link href="terms-and-conditions" color="gray.400" _hover={{ color: 'gray.200' }}>
            Terms & Conditions
            </Link>
          </Stack>
        </Box>
        <Box flex="1" minW="250px" mb={{ base: '4', md: '0' }}>
          <Text fontSize="xl" fontFamily={theme.fonts.heading} fontWeight="bold">LATEST TRENDS</Text>
          <Stack mt={2} spacing={1}>
            <Link href="#" color="gray.400" _hover={{ color: 'gray.200' }}>
              Maldives Wedding Resorts - March 27, 2020
            </Link>
            <Link href="#" color="gray.400" _hover={{ color: 'gray.200' }}>
              Anna and Dave’s Wedding - March 27, 2020
            </Link>
            <Link href="#" color="gray.400" _hover={{ color: 'gray.200' }}>
              Bridesmaid Bouquets - March 27, 2020
            </Link>
          </Stack>
        </Box>

        <Box flex="1" minW="250px" p={2}>
  <Text fontSize="xl" fontFamily="heading" fontWeight="bold">INSTAGRAM</Text>
  <SimpleGrid columns={3} spacing={2} mt={2}>
    <Image src={image1} alt="Instagram 1" boxSize="80px" objectFit="cover" />
    <Image src={image1} alt="Instagram 2" boxSize="80px" objectFit="cover" />
    <Image src={image1} alt="Instagram 3" boxSize="80px" objectFit="cover" />
    <Image src={image1} alt="Instagram 4" boxSize="80px" objectFit="cover" />
    <Image src={image1} alt="Instagram 5" boxSize="80px" objectFit="cover" />
    <Image src={image1} alt="Instagram 6" boxSize="80px" objectFit="cover" />
  </SimpleGrid>
</Box>

      </Flex>

      <Divider borderColor="gray.600" my="4" />

      <Box p="20px" textAlign="center">
        <Text fontSize="sm">
          Copyright &copy; {new Date().getFullYear()} Event Needs. All rights reserved.
        </Text>
      </Box>
    </Box>
  );
};

export default Footer;
