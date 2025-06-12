import React from 'react';
import { Link } from 'react-router-dom';
import styles from './BlogPostList.module.css';

const BlogPostList = ({ posts, cardMode, onEdit, onDelete }) => {
  if (!posts || posts.length === 0) {
    return <div className={styles.empty}>No blog posts found.</div>;
  }
  return (
    <div className={styles.listWrapper}>
      <h1 style={{ textAlign: 'center', color: 'black' }}>Blog Posts</h1>
      <ul className={styles.list}>
        {posts.map(post => (
          <li key={post.id} className={styles.item}>
            <Link to={`/post/${post.id}`} className={styles.link}>
              <div className={cardMode ? styles.card : styles.cardPlain}>
                <h2 className={styles.title}>{post.title}</h2>
                <p className={styles.meta}>By {post.author} &middot; {new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
                <div className={styles.preview}>
                  {/* Optionally show a preview of content, e.g. first 100 chars */}
                  {post.content.replace(/<[^>]+>/g, '').slice(0, 100)}{post.content.replace(/<[^>]+>/g, '').length > 100 ? '...' : ''}
                </div>
              </div>
            </Link>
            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '8px', marginTop: '8px' }}>
              {onDelete && (
                <button
                  style={{background:'#dc3545',color:'#fff',border:'none',borderRadius:'4px',padding:'6px 14px',cursor:'pointer'}}
                  onClick={e => { e.preventDefault(); onDelete(post.id); }}
                >Delete</button>
              )}
              {onEdit && (
                <button
                  style={{background:'#007BFF',color:'#fff',border:'none',borderRadius:'4px',padding:'6px 14px',cursor:'pointer'}}
                  onClick={e => { e.preventDefault(); onEdit(post.id); }}
                >Edit</button>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogPostList;