import React from 'react';
import { Link } from 'react-router-dom';
import styles from './BlogPostList.module.css';

const BlogPostList = ({ posts, cardMode, onEdit, onDelete }) => {
  if (!posts || posts.length === 0) {
    return <div className={styles.empty}>No blog posts found.</div>;
  }
  return (
    <ul className={`blog-post-list ${cardMode ? '' : 'list-mode'}`}>
      {posts.map((post) => (
        <li key={post.id} className={`blog-post-card ${cardMode ? '' : 'list-mode'}`}>
          <h2 className="blog-post-title">
            <Link to={`/post/${post.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
              {post.title}
            </Link>
          </h2>
          <div className="blog-post-meta">
            By {post.author} on {post.date}
          </div>
          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
          <div className="blog-post-actions">
            <button className="blog-post-button" onClick={() => onEdit(post.id)}>Edit</button>
            <button className="blog-post-button delete-button" onClick={() => onDelete(post.id)}>Delete</button>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default BlogPostList;
