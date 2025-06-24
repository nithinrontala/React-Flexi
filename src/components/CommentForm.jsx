import React, { useState } from 'react';
import styles from './CommentForm.module.css';

const CommentForm = ({ onSubmit, isLoggedIn, userName }) => {
  const [name, setName] = useState(userName || '');
  const [text, setText] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if ((!isLoggedIn && !name.trim()) || !text.trim()) {
      setError('Please fill in all required fields.');
      return;
    }
    setError('');
    onSubmit({ name: isLoggedIn ? userName : name, text });
    setText('');
    if (!isLoggedIn) setName('');
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit} aria-live="polite">
      <fieldset className={styles.fieldset}>
        <legend className={styles.legend}>Add a Comment</legend>
        {!isLoggedIn && (
          <div className={styles.formGroup}>
            <label htmlFor="comment-name" className={styles.label}>Name</label>
            <input
              id="comment-name"
              className={styles.input}
              type="text"
              value={name}
              onChange={e => setName(e.target.value)}
              required
              autoComplete="name"
            />
          </div>
        )}
        {isLoggedIn && (
          <div className={styles.formGroup}>
            <label htmlFor="comment-name" className={styles.label}>Name</label>
            <input
              id="comment-name"
              className={styles.input}
              type="text"
              value={userName}
              disabled
              readOnly
            />
          </div>
        )}
        <div className={styles.formGroup}>
          <label htmlFor="comment-text" className={styles.label}>Comment</label>
          <textarea
            id="comment-text"
            className={styles.textarea}
            value={text}
            onChange={e => setText(e.target.value)}
            required
            rows={3}
          />
        </div>
        {error && <div className={styles.error} role="alert">{error}</div>}
        <button type="submit" className={styles.button}>Post Comment</button>
      </fieldset>
    </form>
  );
};

export default CommentForm;
