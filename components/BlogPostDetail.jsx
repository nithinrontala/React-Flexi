import React, { useState } from 'react';
import styles from './BlogPostDetail.module.css';
import CommentList from '../src/components/CommentList';
import CommentForm from '../src/components/CommentForm';

const BlogPostDetail = ({ title, content, author, date, initialComments = [], isLoggedIn = false, userName = '' }) => {
  if (!title || !content || !author || !date) {
    return <p className={styles.notFound}>Blog post not found.</p>;
  }

  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

  // Ensure links open in new tab and are accessible
  const createMarkup = (html) => ({
    __html: html.replace(
      /<a ([^>]*href=["']https?:\/\/[^"']+["'][^>]*)>/gi,
      (match, p1) => `<a ${p1} target="_blank" rel="noopener noreferrer">`
    ),
  });

  // Comment system state
  const [comments, setComments] = useState(initialComments);

  const handleAddComment = (comment) => {
    const newComment = {
      ...comment,
      date: new Date().toISOString(),
      id: Date.now(),
      avatar: undefined, // Add avatar logic if available
    };
    setComments(prev => [...prev, newComment]);
  };

  return (
    <article className={styles.blogPostDetail}>
      <h1 className={styles.title}>{title}</h1>
      <div className={styles.meta}>
        <p className={styles.author}>By {author}</p>
        <p className={styles.date}>Published on {formattedDate}</p>
      </div>
      <div
        className={styles.content}
        dangerouslySetInnerHTML={createMarkup(content)}
        aria-label="Blog post content"
      />
      <section className={styles.commentsSection} aria-label="Comments">
        <h2 className={styles.commentsTitle}>Comments</h2>
        <CommentList comments={comments} />
        <CommentForm onSubmit={handleAddComment} isLoggedIn={isLoggedIn} userName={userName} />
      </section>
    </article>
  );
};

export default BlogPostDetail;
