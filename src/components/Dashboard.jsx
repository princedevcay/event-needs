/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from 'react';
import { SimpleGrid, Heading } from '@chakra-ui/react';
import { useCookies } from 'react-cookie';
import { AlertDialog, AlertDialogOverlay, AlertDialogContent, AlertDialogHeader, AlertDialogBody, AlertDialogFooter, Button, useDisclosure } from '@chakra-ui/react';
import api from '../api'
import VendorListWidget from '../components/Widgets/VendorListWidget'

const Dashboard = () => {
  const [cookies] = useCookies(['isAuthenticated']);
  const [username, setUsername] = useState('');
  const { isOpen, onOpen, onClose } = useDisclosure();

  const fetchData = async () => {
    try {
      const token = cookies.isAuthenticated;
      const response = await api.get('/users/me', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
  
      const user = response.data;
      setUsername(user.name || 'UserName');
    } catch (error) {
      console.error('Error fetching username:', error);
      setUsername('UserName'); // Default value or handle the error as needed
    }
  };

  
  useEffect(() => {
    fetchData();
  }, [cookies.isAuthenticated, fetchData]);

  useEffect(() => {
    // Set the document title when the component mounts
    document.title = 'Dashboard';

    // Optionally, you can return a cleanup function to update the title when the component unmounts
    return () => {
      document.title = 'Event Needs'; // Reset the title when the component unmounts
    };
  }, []);

  return (
    <>
      <Heading size="lg" mb={4} pl={3} color={"brown.500"}>{`Welcome back, ${username || 'UserName'}!`}</Heading>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={5} p={5} mb={10}>
      </SimpleGrid>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={5} p={5} mb={10}>
        <VendorListWidget/>
      </SimpleGrid>

    </>
  );
};

export default Dashboard;
