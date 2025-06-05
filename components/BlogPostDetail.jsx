import React from 'react';
import styles from './BlogPostDetail.module.css';

const BlogPostDetail = ({ title, content, author, date }) => {
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
    </article>
  );
};

export default BlogPostDetail;
