'use client'

import Link from 'next/link';
import { useEffect, useState } from 'react';
import styles from './nav.module.css';

const Nav = () => {
  const [currentPath, setCurrentPath] = useState('');

  useEffect(() => {
    if (window) {
      setCurrentPath(window.location.pathname);
    }
  }, []);

  return (
    <div className={styles.nav}>
      <Link href={`/home`} className={currentPath === '/home' ? styles.active : styles.inactive}>Home</Link>
      <Link href={`/about`} className={currentPath === '/about' ? styles.active : styles.inactive}>About</Link>
      <Link href={`/content`} className={currentPath === '/content' ? styles.active : styles.inactive}>Content</Link>
      <Link href={`/contact`} className={currentPath === '/contact' ? styles.active : styles.inactive}>Contact</Link>
    </div>
  )
}

export { Nav };