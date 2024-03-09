import React, { useEffect, useState } from 'react';
import { Box, Text, Heading, Grid, GridItem, Image, Container, LinkBox } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { fetchPosts } from '../services/postService';

function FeaturedBlogPostsList() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    const loadPosts = async () => {
      try {
        const postsData = await fetchPosts();
        setPosts(postsData);
      } catch (error) {
        setError(error);
        console.error('Error fetching posts:', error);
      } finally {
        setLoading(false);
      }
    };

    loadPosts();
  }, []);

  const truncateExcerpt = (text) => {
    return text.length > 100 ? text.substring(0, 100) + '...' : text;
  };

  if (loading) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    return <Text>Error loading posts: {error.message}</Text>;
  }

  return (
    <Box py={10} bg="brown.50">
    <Container  maxW="container.xl" borderRadius={"xl"}>
        <Heading as="h2" size="xl" textAlign="center" mb={4}>
          Featured Blog Posts
        </Heading>
        <Text textAlign="center" mb={6} fontFamily="body">
          Explore our curated articles
        </Text>
        <Grid templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(3, 1fr)" }} gap={6}>
          {posts.map(post => (
            <GridItem key={post.id} w="100%" mb="10">
              <LinkBox borderWidth="1px" borderRadius="lg" overflow="hidden">
                {post.featured_image_url && (
                  <Box height="200px" overflow="hidden">
                    <Image src={post.featured_image_url} alt={post.title.rendered} objectFit="cover" width="100%" height="100%" />
                  </Box>
                )}
                <Box p="6">
                <Link to={`/post/${post.id}`}>
                    <Heading size="md">{post.title.rendered}</Heading>
                  </Link>
                  <Text mt="2" dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
                </Box>
              </LinkBox>
            </GridItem>
          ))}
        </Grid>
    </Container>
    </Box>
  );
}

export default FeaturedBlogPostsList;
