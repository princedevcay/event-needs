// SinglePost.jsx
import  { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import api from '../../api'; // Ensure the import path is correct

function SinglePost() {
  const { postId } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    api.get(`posts/${postId}`) // Axios GET request
      .then(response => {
        setPost(response.data);
        setLoading(false);
      })
      .catch(err => {
        setError(err);
        setLoading(false);
      });
  }, [postId]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading post!</div>;
  if (!post) return <div>No post found</div>;

  return (
    <div>
      <h1>{post.title.rendered}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
      {/* Additional post details */}
    </div>
  );
}

export default SinglePost;
