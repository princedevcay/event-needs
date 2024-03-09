import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Box, Text, VStack, Heading, Avatar, Center } from '@chakra-ui/react';

// Mock data for testimonials
const testimonialData = [
  {
    name: "John Doe",
    role: "Event Planner",
    avatarUrl: "https://via.placeholder.com/150",
    testimonial: "Working with Add to Event has significantly expanded my client base. Their platform is user-friendly, and I appreciate the support from their team."
  },
  {
    name: "Jane Smith",
    role: "Caterer",
    avatarUrl: "https://via.placeholder.com/150",
    testimonial: "Add to Event has been instrumental in helping me find new catering opportunities. Their platform connects me with clients who are a perfect fit for my services."
  },
  {
    name: "Alice Johnson",
    role: "Photographer",
    avatarUrl: "https://via.placeholder.com/150",
    testimonial: "I've been using Add to Event for years, and it consistently delivers quality leads. It's a valuable tool for any event vendor looking to grow their business."
  },
  {
    name: "Michael Brown",
    role: "Entertainer",
    avatarUrl: "https://via.placeholder.com/150",
    testimonial: "Add to Event has helped me reach a broader audience for my entertainment services. Their platform is easy to use, and I've seen a significant increase in bookings."
  },
  {
    name: "Sarah Miller",
    role: "Florist",
    avatarUrl: "https://via.placeholder.com/150",
    testimonial: "I highly recommend Add to Event to fellow florists. It's a great way to showcase your work and connect with clients who appreciate quality floral arrangements."
  },
  {
    name: "David Wilson",
    role: "Venue Owner",
    avatarUrl: "https://via.placeholder.com/150",
    testimonial: "As a venue owner, Add to Event has been invaluable in filling up our event calendar. The platform brings in inquiries from clients interested in hosting events at our venue."
  },
];

const Testimonials = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    pauseOnHover: true,
  };

  return (
    <Box id="testimonials" bg={"brown.50"} py={10} px={{ base: 4, md: 16 }} bgImage="url('bg.jpg')" bgPosition="center" bgRepeat="no-repeat" bgSize="cover" color="white">
      <VStack spacing={4} align="stretch" textAlign="center">
      <Heading as="h2" size="xl" textAlign="center" color={"black"} mb={4}>
          What Our Vendors Say
        </Heading>
        <Slider {...settings}>
          {testimonialData.map((testimonial, index) => (
            <Center key={index} flexDirection="column" p={5}>
              <Avatar name={testimonial.name} src={testimonial.avatarUrl} size="xl" mb={4} />
              <Text color="black" fontSize="xl" fontWeight="bold" mb={3}>
                {testimonial.name}
              </Text>
              <Text color="black" fontSize="md" mb={3} px={6}>
                {testimonial.testimonial}
              </Text>
              <Text color="gray.500" fontSize="sm">
                {testimonial.role}
              </Text>
            </Center>
          ))}
        </Slider>
      </VStack>
    </Box>
  );
};

export default Testimonials;
