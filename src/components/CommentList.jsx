import React from 'react';
import Comment from './Comment';
import styles from './CommentList.module.css';

const CommentList = ({ comments }) => (
  <div className={styles.commentList} role="list" aria-live="polite">
    {comments && comments.length > 0 ? (
      comments.map((comment, idx) => (
        <Comment
          key={comment.id || idx}
          name={comment.name}
          date={comment.date}
          text={comment.text}
          avatar={comment.avatar}
        />
      ))
    ) : (
      <div className={styles.noComments}>No comments yet.</div>
    )}
  </div>
);

export default CommentList;
