import React, { useState, useEffect } from 'react';
import { fetchUserProfile, updateUserProfile } from '../../services/postService';
import { Box, Heading, SimpleGrid, FormControl, FormLabel, Input, Button } from '@chakra-ui/react';

const UserProfile = () => {
  const [userProfile, setUserProfile] = useState(null);
  const [editing, setEditing] = useState(false);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const userProfileData = await fetchUserProfile();
        setUserProfile(userProfileData);
      } catch (error) {
        console.error('Error fetching user profile:', error);
      }
    };

    fetchProfile();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserProfile({ ...userProfile, [name]: value });
  };

  const handleVendorInputChange = (fieldName, value) => {
    setUserProfile({
      ...userProfile,
      acf: {
        ...userProfile.acf,
        [fieldName]: value,
      },
    });
  };

  const handleUpdateProfile = async () => {
    try {
      await updateUserProfile(userProfile);
      setEditing(false);
      console.log('User profile updated successfully');
    } catch (error) {
      console.error('Error updating user profile:', error);
    }
  };

  return (
    <Box>
      {userProfile && (
        <Box borderWidth="1px" borderRadius="lg" p={4} mb={4}>
          <Heading as="h2" size="lg" mb={4}>
            User Profile
          </Heading>
          <SimpleGrid columns={{ base: 1, lg: 3 }} spacing={4}>
            <FormControl isDisabled={!editing}>
              <FormLabel>Username</FormLabel>
              <Input
                type="text"
                name="username"
                value={userProfile.slug}
                onChange={handleInputChange}
                disabled={true}
                readOnly={!editing}
              />
            </FormControl>
            <FormControl isDisabled={!editing}>
              <FormLabel>Name</FormLabel>
              <Input
                type="text"
                name="name"
                value={userProfile.name}
                onChange={handleInputChange}
                disabled={!editing}
              />
            </FormControl>
            <FormControl isDisabled={!editing}>
              <FormLabel>Email Address</FormLabel>
              <Input
                type="email"
                name="email"
                value={userProfile.email}
                onChange={handleInputChange}
                disabled={!editing}
              />
            </FormControl>
            <FormControl isDisabled={!editing}>
              <FormLabel>Phone</FormLabel>
              <Input
                type="text"
                name="phone"
                value={userProfile.phone}
                onChange={handleInputChange}
                disabled={!editing}
              />
            </FormControl>
            <FormControl isDisabled={!editing}>
              <FormLabel>Business website or social media URL (e.g. Instagram)</FormLabel>
              <Input
                type="text"
                name="website"
                value={userProfile.website}
                onChange={handleInputChange}
                disabled={!editing}
              />
            </FormControl>
            {/* Add more editable user fields here */}
          </SimpleGrid>

          <Heading as="h3" size="md" mt={4} mb={2}>
            Vendor Details
          </Heading>
          <SimpleGrid columns={{ base: 1, lg: 3 }} spacing={4}>
            <FormControl isDisabled={!editing}>
              <FormLabel>Vendor Name</FormLabel>
              <Input
                type="text"
                name="vendorName"
                value={userProfile.acf.vendorName}
                onChange={(e) => handleVendorInputChange('vendorName', e.target.value)}
                disabled={!editing}
              />
            </FormControl>
            <FormControl isDisabled={!editing}>
              <FormLabel>Vendor Email</FormLabel>
              <Input
                type="email"
                name="vendorEmail"
                value={userProfile.acf.vendorEmail}
                onChange={(e) => handleVendorInputChange('vendorEmail', e.target.value)}
                disabled={!editing}
              />
            </FormControl>
            <FormControl isDisabled={!editing}>
              <FormLabel>Selected Package</FormLabel>
              <Input
                type="text"
                name="selectedPackage"
                value={userProfile.acf.selectedPackage}
                onChange={(e) => handleVendorInputChange('selectedPackage', e.target.value)}
                disabled={true}
                readOnly={!editing}
              />
            </FormControl>
            <FormControl isDisabled={!editing}>
              <FormLabel>Primary Service</FormLabel>
              <Input
                type="text"
                name="primaryService"
                value={userProfile.acf.primaryService}
                onChange={(e) => handleVendorInputChange('primaryService', e.target.value)}
                disabled={!editing}
              />
            </FormControl>
            <FormControl isDisabled={!editing}>
              <FormLabel>Secondary Service</FormLabel>
              <Input
                type="text"
                name="secondaryService"
                value={userProfile.acf.secondaryService}
                onChange={(e) => handleVendorInputChange('secondaryService', e.target.value)}
                disabled={!editing}
              />
            </FormControl>
            <FormControl isDisabled={!editing}>
              <FormLabel>Contact Person</FormLabel>
              <Input
                type="text"
                name="contactPerson"
                value={userProfile.acf.contactPerson}
                onChange={(e) => handleVendorInputChange('contactPerson', e.target.value)}
                disabled={!editing}
              />
            </FormControl>
            <FormControl isDisabled={!editing}>
              <FormLabel>Years In Service</FormLabel>
              <Input
                type="text"
                name="yearsInService"
                value={userProfile.acf.yearsInService}
                onChange={(e) => handleVendorInputChange('yearsInService', e.target.value)}
                disabled={!editing}
              />
            </FormControl>
            <FormControl isDisabled={!editing}>
              <FormLabel>Company Name</FormLabel>
              <Input
                type="text"
                name="companyName"
                value={userProfile.acf.companyName}
                onChange={(e) => handleVendorInputChange('companyName', e.target.value)}
                disabled={!editing}
              />
            </FormControl>
            <FormControl isDisabled={!editing}>
              <FormLabel>Vendor Email</FormLabel>
              <Input
                type="email"
                name="vendorEmail"
                value={userProfile.acf.vendorEmail}
                onChange={(e) => handleVendorInputChange('vendorEmail', e.target.value)}
                disabled={!editing}
              />
            </FormControl>
            <FormControl isDisabled={!editing}>
              <FormLabel>Vendor Email</FormLabel>
              <Input
                type="email"
                name="vendorEmail"
                value={userProfile.acf.vendorEmail}
                onChange={(e) => handleVendorInputChange('vendorEmail', e.target.value)}
                disabled={!editing}
              />
            </FormControl>
            <FormControl isDisabled={!editing}>
              <FormLabel>Vendor Email</FormLabel>
              <Input
                type="email"
                name="vendorEmail"
                value={userProfile.acf.vendorEmail}
                onChange={(e) => handleVendorInputChange('vendorEmail', e.target.value)}
                disabled={!editing}
              />
            </FormControl>
            <FormControl isDisabled={!editing}>
              <FormLabel>Vendor Email</FormLabel>
              <Input
                type="email"
                name="vendorEmail"
                value={userProfile.acf.vendorEmail}
                onChange={(e) => handleVendorInputChange('vendorEmail', e.target.value)}
                disabled={!editing}
              />
            </FormControl>
            {/* Add more editable vendor fields here */}
          </SimpleGrid>

          {editing ? (
            <Button colorScheme="brown" onClick={handleUpdateProfile}>
              Update Profile Details
            </Button>
          ) : (
            <Button colorScheme="gray" onClick={() => setEditing(true)}>
              Edit Profile Details
            </Button>
          )}
        </Box>
      )}
    </Box>
  );
};

export default UserProfile;
