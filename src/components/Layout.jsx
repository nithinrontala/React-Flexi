import React from 'react';
import NavBar from './NavBar';
import styles from './Layout.module.css';

const Layout = ({ children }) => {
  return (
    <div className={styles.layout}>
      <header className={styles.header}>
        <NavBar />
      </header>
      <main className={styles.main}>
        {children}
      </main>
      <footer className={styles.footer}>
        <p>&copy; 2025 BlogApp. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Layout;
