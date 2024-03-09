import React, { useState } from 'react';
import {
  Icon, Flex, Button, HStack, Link, IconButton,
  Menu, MenuButton, MenuList, MenuItem, Drawer,
  DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerBody, VStack
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { FaBars, FaUserCircle, FaShoppingCart } from 'react-icons/fa';

const NavigationMenu = ({ colorScheme }) => {
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const openSubMenu = () => setIsSubMenuOpen(true);
  const closeSubMenu = () => setIsSubMenuOpen(false);
  const toggleMobileNav = () => setMobileNavOpen(!mobileNavOpen);

  return (
    <>
      {/* Desktop Navigation Menu */}
      <HStack as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }}>
        <Link as={RouterLink} to="/" color={`${colorScheme}.800`}>Home</Link>
        <Link as={RouterLink} to="/about" color={`${colorScheme}.800`}>About</Link>

        {/* Submenu */}
        <Menu isOpen={isSubMenuOpen} onClose={closeSubMenu}>
          <MenuButton
            as={Button}
            variant="ghost"
            onMouseEnter={openSubMenu}
            onMouseLeave={closeSubMenu}
            colorScheme={colorScheme}
          >
            Categories
          </MenuButton>
          <MenuList onMouseEnter={openSubMenu} onMouseLeave={closeSubMenu}>
            <MenuItem as={RouterLink} to="/category1">Category 1</MenuItem>
            <MenuItem as={RouterLink} to="/category2">Category 2</MenuItem>
            {/* More categories */}
          </MenuList>
        </Menu>

        <Link as={RouterLink} to="/events" color={`${colorScheme}.800`}>Events</Link>
        {/* Additional Links */}
      </HStack>

      {/* Additional Buttons */}
      <Flex alignItems={'center'} display={{ base: 'none', md: 'flex' }}>
        <Button as={RouterLink} to="/business" variant="solid" colorScheme={colorScheme}>
          List Your Business
        </Button>
        <Button as={RouterLink} to="/register" variant="outline" colorScheme={colorScheme}>
          Register
        </Button>
        <Icon as={FaShoppingCart} w={7} h={7} color={`${colorScheme}.800`} />
      </Flex>

      {/* Mobile Menu Icon */}
      <IconButton
        icon={<FaBars />}
        aria-label={'Open Menu'}
        display={{ base: 'flex', md: 'none' }}
        onClick={toggleMobileNav}
        colorScheme={colorScheme}
      />

      {/* Mobile Navigation Drawer */}
      <Drawer isOpen={mobileNavOpen} placement="right" onClose={toggleMobileNav}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerBody>
            <VStack spacing={5} mt={10}>
              <Link as={RouterLink} to="/vendors" color={`${colorScheme}.800`}>Vendors</Link>
              <Link as={RouterLink} to="/categories" color={`${colorScheme}.800`}>Categories</Link>
              <Link as={RouterLink} to="/events" color={`${colorScheme}.800`}>Events</Link>
              {/* Add more mobile navigation links as needed */}
              <Button as={RouterLink} to="/sell" variant="solid" colorScheme={colorScheme}>
                Start Selling
              </Button>
              <Button as={RouterLink} to="/login" variant="outline" colorScheme={colorScheme}>
                Register
              </Button>
              <Icon as={FaUserCircle} w={8} h={8} color={`${colorScheme}.800`} />
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default NavigationMenu;
