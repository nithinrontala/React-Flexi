import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './NavBar.module.css';

const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const menuRef = useRef();
  const buttonRef = useRef();

  // Close menu when clicking outside
  useEffect(() => {
    if (!isMobileMenuOpen) return;
    const handleClick = (e) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(e.target)
      ) {
        setIsMobileMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [isMobileMenuOpen]);

  // Close menu on link click
  const handleLinkClick = () => setIsMobileMenuOpen(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen((open) => !open);

  return (
    <nav className={styles.navBar} role="navigation" aria-label="Main navigation">
      <Link to="/" className={styles.logo} tabIndex={0}>BlogApp</Link>
      <div className={styles.links}>
        <Link to="/" tabIndex={0}>Home</Link>
        <Link to="/blog" tabIndex={0}>Blog</Link>
        <Link to="/about" tabIndex={0}>About</Link>
      </div>
      <button
        ref={buttonRef}
        className={styles.hamburger}
        onClick={toggleMobileMenu}
        aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={isMobileMenuOpen}
        aria-controls="mobile-menu"
        tabIndex={0}
      >
        <span aria-hidden="true">{isMobileMenuOpen ? '✕' : '☰'}</span>
      </button>
      <div
        ref={menuRef}
        id="mobile-menu"
        className={`${styles.mobileMenu} ${isMobileMenuOpen ? styles.open : ''}`}
        aria-hidden={!isMobileMenuOpen}
      >
        <Link to="/" onClick={handleLinkClick} tabIndex={isMobileMenuOpen ? 0 : -1}>Home</Link>
        <Link to="/blog" onClick={handleLinkClick} tabIndex={isMobileMenuOpen ? 0 : -1}>Blog</Link>
        <Link to="/about" onClick={handleLinkClick} tabIndex={isMobileMenuOpen ? 0 : -1}>About</Link>
      </div>
    </nav>
  );
};

export default NavBar;
