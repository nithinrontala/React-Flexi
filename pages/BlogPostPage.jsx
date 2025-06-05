import React from 'react';
import { useParams } from 'react-router-dom';
import BlogPostDetail from '../components/BlogPostDetail';

const BlogPostPage = ({ posts }) => {
  const { id } = useParams();
  const post = posts.find(p => p.id === id);
  return <BlogPostDetail {...(post || {})} />;
};

export default BlogPostPage;
