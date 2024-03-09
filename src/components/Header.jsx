import React, { useState, useEffect } from 'react';
import { useNavigate, Link as RouterLink, NavLink } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import logoImage from '../assets/logo.jpg';
import { getToken } from '../services/postService'
import { Cookies } from 'react-cookie'
import {
  Box,
  Flex,
  Image,
  IconButton,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  Stack,
  Button,
  Link as ChakraLink,
  HStack,
  useBreakpointValue,
  Link
} from '@chakra-ui/react';

const cookies = new Cookies(); 

const Header = () => {
  const navigate = useNavigate();
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = getToken();
    setIsAuthenticated(!!token);
  }, []);

  const handleLogout = () => {
    const logoutConfirmed = window.confirm('Are you sure you want to log out?');
    if (logoutConfirmed) {
      // Clear the authentication token from cookies
      cookies.remove('isAuthenticated');
      setIsAuthenticated(false);
      navigate('/login');
    }
  };

  const toggleMobileNav = () => setMobileNavOpen(!mobileNavOpen);

  const isDesktop = useBreakpointValue({ base: false, md: true });



  return (
    <Box as="header" bg="white" px={10} py={4} shadow="md" w="full" textAlign="center" height={"80px"}>
      <Flex h={16} alignItems="center" justifyContent="space-between" fontFamily={"heading"} fontSize="xl">
        <Box zIndex="3">
          <Link as={RouterLink} to="/">
            <Image src={logoImage} alt="Logo" boxSize={{ base: '100px', md: '150px' }} borderRadius="full" />
          </Link>
        </Box>

        {/* Mobile Navigation Icon */}
        <IconButton
          icon={<FaBars />}
          aria-label="Open menu"
          onClick={toggleMobileNav}
          colorScheme="brown"
          display={{ base: 'inline-flex', md: 'none' }}
        />

        {/* Mobile Navigation Drawer */}
        <Drawer isOpen={mobileNavOpen} placement="right" onClose={toggleMobileNav}>
          <DrawerOverlay />
          <DrawerContent fontFamily={"heading"} fontSize={"xl"} textTransform="Uppercase" fontWeight="bold">
            <DrawerCloseButton />
            <DrawerHeader>Menu</DrawerHeader>
            <DrawerBody>
              <Stack spacing={4}>
                <ChakraLink as={RouterLink} to="/" onClick={toggleMobileNav}>
                  Home
                </ChakraLink>
                <ChakraLink as={RouterLink} to="/vendors" onClick={toggleMobileNav}>
                  Browse Vendors
                </ChakraLink>
                {isAuthenticated ? (
                  <>
                    {/* Render only if the user is logged in */}
                    <Button as={RouterLink} to="/dashboard" colorScheme="brown" fontSize="xl">My Dashboard</Button>
                    <Button onClick={handleLogout} colorScheme="red" fontSize="xl">Logout</Button>
                  </>
                ) : (
                  <>
                    {/* Render only if the user is not logged in */}
                    <Button as={RouterLink} to="/list-your-business" colorScheme="brown" fontSize="xl">List Your Business</Button>
                    <Button as={RouterLink} to="/login" variant="outline" colorScheme="brown" fontSize="xl">Sign In</Button>
                  </>
                )}
               
              </Stack>
            </DrawerBody>
          </DrawerContent>
        </Drawer>

        {/* Centered Desktop Menu */}
        {isDesktop && (
          <HStack spacing={6} justify="center" flex="1" textTransform="uppercase" fontWeight="bold">
            <ChakraLink as={RouterLink} to="/" _hover={{ textDecoration: 'underline'}}>
              Home
            </ChakraLink>
            <ChakraLink as={RouterLink} to="/vendors" _hover={{ textDecoration: 'underline' }} >
              Browse Vendors
            </ChakraLink>
            {/* Add more menu items */}
          </HStack>
        )}

        {/* Buttons for Desktop */}
        {isDesktop && (
          <Stack direction="row" spacing={4} display={{ base: 'none', md: 'inline-flex' }}>
            {isAuthenticated ? (
              <>
                {/* Render only if the user is logged in */}
                <Button as={RouterLink} to="/dashboard" colorScheme="brown" fontSize="xl">My Dashboard</Button>
                <Button onClick={handleLogout} colorScheme="red" fontSize="xl">Logout</Button>
              </>
            ) : (
              <>
                {/* Render only if the user is not logged in */}
                <Button as={RouterLink} to="/list-your-business" colorScheme="brown" fontSize="xl">List Your Business</Button>
                <Button as={RouterLink} to="/login" variant="outline" colorScheme="brown" fontSize="xl">Sign In</Button>
              </>
            )}
          </Stack>
        )}
      </Flex>
    </Box>
  );
};

export default Header;
