import { useState, useEffect } from 'react';
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  IconButton,
  Flex,
  Spacer,
  Button,
  Heading,
  Text,
  Spinner,
} from '@chakra-ui/react';
import { FaEdit, FaTrash } from 'react-icons/fa';
import axiosInstance from '../../api';

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get('posts');
        setBlogs(response.data);
        setLoading(false); // Set loading to false once data is fetched
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleDelete = (id) => {
    // Implement delete logic here
  };

  const handleEdit = (id) => {
    // Implement edit logic here
  };

  // Function to remove HTML tags from text
  const stripHtmlTags = (html) => {
    const doc = new DOMParser().parseFromString(html, 'text/html');
    return doc.body.textContent || "";
  };

  return (
    <>
      <Heading as="h1" size="xl" mb={4}>Blog</Heading>
      <Text fontSize="lg" mb={6}>Explore our latest blog posts</Text>
      {loading && ( // Display spinner while loading data
        <Flex justify="center" align="center" minHeight="200px">
          <Spinner color="brown.500" size="xl" />
        </Flex>
      )}
      {!loading && ( // Display table once data is loaded
        <Table variant="simple" mb={10}>
          <Thead>
            <Tr>
              <Th>ID</Th>
              <Th>Title</Th>
              <Th>Content</Th>
              <Th>Excerpt</Th>
              <Th>Status</Th>
              <Th>Created Date</Th>
              <Th>Action</Th>
            </Tr>
          </Thead>
          <Tbody>
            {blogs.map((blog) => (
              <Tr key={blog.id}>
                <Td>{blog.id}</Td>
                <Td>{blog.title.rendered}</Td>
                <Td>{stripHtmlTags(blog.content.rendered)}</Td>
                <Td>{stripHtmlTags(blog.excerpt.rendered)}</Td>
                <Td>{blog.status}</Td>
                <Td>{blog.date}</Td>
                <Td>
                  <Flex>
                    <IconButton
                      aria-label="Edit"
                      icon={<FaEdit />}
                      onClick={() => handleEdit(blog.id)}
                    />
                    <Spacer />
                    <IconButton
                      aria-label="Delete"
                      icon={<FaTrash />}
                      onClick={() => handleDelete(blog.id)}
                    />
                  </Flex>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      )}
      <Button colorScheme='brown'>Add Blog</Button>
    </>
  );
};

export default Blog;
