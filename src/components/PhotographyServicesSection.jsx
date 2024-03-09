import { Box, SimpleGrid, List, ListItem, ListIcon } from '@chakra-ui/react';
import { MdCheckCircle } from 'react-icons/md';

const PhotographyServicesSection = () => {
  const services = [
    "Wedding Photography",
    "Event Coverage",
    "Portrait Sessions",
    "Commercial Photography",
    "Product Photography",
    "Fashion Photography",
    "Sports Photography",
    "Real Estate Photography",
    "Food Photography",
    "Photo Editing Services"
  ];

  // Split the services into two columns
  const columnOneServices = services.slice(0, Math.ceil(services.length / 2));
  const columnTwoServices = services.slice(Math.ceil(services.length / 2));

  return (
    <Box id="details" p={5}>
      <SimpleGrid columns={2} spacing={10}>
        <List spacing={3}>
          {columnOneServices.map((service, index) => (
            <ListItem key={index} fontSize="lg">
              <ListIcon as={MdCheckCircle} color="green.500" />
              {service}
            </ListItem>
          ))}
        </List>
        <List spacing={3}>
          {columnTwoServices.map((service, index) => (
            <ListItem key={index} fontSize="lg">
              <ListIcon as={MdCheckCircle} color="green.500" />
              {service}
            </ListItem>
          ))}
        </List>
      </SimpleGrid>
    </Box>
  );
};

export default PhotographyServicesSection;
