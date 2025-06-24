import React from 'react';
import styles from './Comment.module.css';

function formatDate(date) {
  const d = typeof date === 'string' ? new Date(date) : date;
  return d.toLocaleString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  });
}

const Comment = ({ name, date, text, avatar }) => (
  <div className={styles.comment} role="listitem">
    {avatar && (
      <img
        src={avatar}
        alt={name ? `${name}'s avatar` : 'Avatar'}
        className={styles.avatar}
        width={50}
        height={50}
      />
    )}
    <div className={styles.contentWrapper}>
      <div className={styles.header}>
        <span className={styles.name}>{name}</span>
        <span className={styles.date}>{formatDate(date)}</span>
      </div>
      <div className={styles.text}>{text}</div>
    </div>
  </div>
);

export default Comment;
