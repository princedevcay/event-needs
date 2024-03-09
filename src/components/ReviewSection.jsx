import React, { useState, useEffect } from 'react';
import {
  Box, Heading, VStack, HStack, Avatar, Progress, Button, FormControl, FormLabel,
  Textarea, Input, useToast, Divider, Text, Stack, useColorModeValue
} from '@chakra-ui/react';
import { StarIcon } from '@chakra-ui/icons';
import api from '../api';

const ReviewSection = () => {
  const toast = useToast();
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState('');
  const [newRating, setNewRating] = useState(0);

  useEffect(() => {
    api.get('/review')
      .then(response => {
        setReviews(response.data);
      })
      .catch(error => {
        toast({
          title: 'Error',
          description: 'Unable to fetch reviews.',
          status: 'error',
          duration: 5000,
          isClosable: true,
        });
      });
  }, []);

  const handleSubmitReview = async (e) => {
    e.preventDefault();
  
    try {
      const response = await api.post('/review', { 
        comment: newReview, 
        rating: parseInt(newRating, 10)  // Ensure rating is an integer
      });
  
      // Check for successful response (e.g., HTTP status 200 or 201)
      if (response.status === 200 || response.status === 201) {
        toast({
          title: 'Review Submitted',
          description: 'Your review has been successfully submitted.',
          status: 'success',
          duration: 5000,
          isClosable: true,
        });
  
        // Reset form fields after successful submission
        setNewReview('');
        setNewRating(0);
      } else {
        // Handle other responses
        throw new Error(`Server responded with status: ${response.status}`);
      }
    } catch (error) {
      let errorMessage = 'Failed to submit review.';
      
      if (error.response) {
        // Detailed error message from server response
        errorMessage += ` Error: ${error.response.data.message || error.response.statusText}`;
      } else {
        // General error message
        errorMessage += ' Please try again later.';
      }
  
      console.error('Submission error:', error.response || error);
  
      toast({
        title: 'Error',
        description: errorMessage,
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    }
  };
  

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <StarIcon key={index} color={index < rating ? "yellow.400" : "gray.300"} />
    ));
  };

  return (
    <Box p={5}>
      <Heading size="lg" textAlign="center">Customer Reviews</Heading>

      {/* Form to Leave a Review */}
      <VStack as="form" spacing={4} onSubmit={handleSubmitReview}>
        <Heading size="md">Write a Review</Heading>
        <FormControl isRequired>
          <FormLabel htmlFor="review">Your Review</FormLabel>
          <Textarea id="review" placeholder="Share your experience with us" 
                    value={newReview} onChange={(e) => setNewReview(e.target.value)} />
        </FormControl>
        <FormControl isRequired>
          <FormLabel htmlFor="rating">Rating</FormLabel>
          <Input id="rating" type="number" placeholder="Rate from 1 to 5" max={5} min={1}
                 value={newRating} onChange={(e) => setNewRating(parseInt(e.target.value))} />
        </FormControl>
        <Button colorScheme="blue" variant="outline" type="submit">
          Submit Review
        </Button>
      </VStack>

      <Divider my={5} />

      {/* Display Reviews */}
      <VStack spacing={5} align="stretch">
        {reviews.map((review) => (
          <Box key={review.id} p={5} shadow="md" borderWidth="1px" borderRadius="md" bg={useColorModeValue('white', 'gray.700')}>
            <HStack align="start" spacing={4}>
              <Avatar name={review.author_name} src={review.author_avatar_urls?.['48']} />
              <VStack align="start">
                <HStack>{renderStars(review.acf.rating)}</HStack>  {/* Assuming rating is under acf */}
                <Text fontWeight="bold">{review.title.rendered}</Text>
                <Text color={useColorModeValue('gray.600', 'gray.400')}>
                  {review.acf.comment}  {/* Access comment from acf */}
                </Text>
              </VStack>
            </HStack>
          </Box>
        ))}
      </VStack>
    </Box>
  );
};

export default ReviewSection;
