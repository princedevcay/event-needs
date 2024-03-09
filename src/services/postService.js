import api from '../api';
import { Cookies } from 'react-cookie';

const cookies = new Cookies();

// Utility function to get the authentication token
export const getToken = () => {
  const token = cookies.get('isAuthenticated') || '';
  if (!token) {
    console.warn('Authentication token is missing.');
    return null;
  }
  return token;
};


export const fetchPosts = async () => {
  try {
    const response = await api.get('posts?per_page=3');
    const posts = response.data;

    // Fetch featured image URLs for each post
    const postsWithImages = await Promise.all(
      posts.map(async (post) => {
        // Check if the post has a featured image
        if (post.featured_media > 0) {
          try {
            // Fetch the media details
            const mediaResponse = await api.get(`media/${post.featured_media}`);
            const media = mediaResponse.data;

            // Add the image URL to the post object
            post.featured_image_url = media.source_url;
          } catch (mediaError) {
            console.error('Error fetching media:', mediaError);
            // Handle error or set a default image
            post.featured_image_url = ''; // or set to a default image URL
          }
        }
        return post;
      })
    );

    return postsWithImages;
  } catch (error) {
    console.error('Error fetching posts:', error);
    throw error;
  }
};

export const fetchVendors = async () => {
  try {
    const response = await api.get('vendor');
    const vendors = response.data;

    // Fetch featured image URLs for each vendor
    const vendorsWithImages = await Promise.all(
      vendors.map(async (vendor) => {
        if (vendor.featured_media) {
          const mediaResponse = await api.get(`media/${vendor.featured_media}`);
          const media = mediaResponse.data;
          vendor.featured_image_url = media.source_url; // Assuming 'source_url' contains the image URL
        }
        return vendor;
      })
    );

    return vendorsWithImages;
  } catch (error) {
    console.error('Error fetching vendors:', error);
    throw error;
  }
};

export const createPost = async (postData) => {
  try {
    const response = await api.post('posts', postData, {
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error creating post:', error);
    throw error;
  }
};

export const deletePost = async (postId) => {
  try {
    const response = await api.delete(`posts/${postId}`, {
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error deleting post:', error);
    throw error;
  }
};

export const updatePost = async (postId, updatedData) => {
  try {
    const response = await api.put(`posts/${postId}`, updatedData, {
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error updating post:', error);
    throw error;
  }
};


export const fetchUserProfile = async () => {
  try {
    const token = getToken();

    // Fetch user profile
    const userProfileResponse = await api.get('/users/me', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const userProfile = userProfileResponse.data;

    // Fetch associated vendor details
    const vendorResponse = await api.get('/vendor', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const vendorData = vendorResponse.data;

    // Combine user profile and vendor details
    const userProfileWithVendor = {
      ...userProfile,
      vendor: vendorData,
    };

    return userProfileWithVendor;
  } catch (error) {
    console.error('Error fetching user profile:', error);
    throw error;
  }
};


export const updateUserProfile = async (userData) => {
  try {
    const token = getToken();

    const response = await api.put('/users/me', userData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  } catch (error) {
    console.error('Error updating user profile:', error);
    throw error;
  }
};