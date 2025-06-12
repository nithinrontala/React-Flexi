import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import BlogPostDetail from '../components/BlogPostDetail';

const BlogPostPage = ({ posts }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const post = posts.find(p => p.id === id);
  return (
    <div>
      <BlogPostDetail {...(post || {})} />
      {post && (
        <div style={{textAlign:'right',margin:'24px 0'}}>
          <button
            style={{background:'#007BFF',color:'#fff',padding:'8px 16px',borderRadius:'4px',border:'none',fontWeight:'bold',cursor:'pointer'}}
            onClick={() => navigate(`/edit/${id}`)}
          >Edit Post</button>
        </div>
      )}
    </div>
  );
};

export default BlogPostPage;
