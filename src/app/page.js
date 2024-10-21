'use client';

import { useEffect } from 'react';
import { useTransitionRouter } from 'next-transition-router';
import { Plane } from '@/components/atoms/plane';
import { Globe } from '@/components/atoms/globe';
import styles from './entry.module.css';

const Entry = () => {
  const router = useTransitionRouter();

  useEffect(() => {
    router.prefetch('/home');

    setTimeout(() => {
      router.push('/home');
    }, 6000);
  }, []);

  return (
    <main className={styles.main}>
      <div className={styles.content}>
        <div className={styles.starryNight}></div>
        <Plane entry />
        <div className={styles.sections}>
          <section className={styles.entry}>
            <Globe />
            <div className={styles.logo}>
              <h2>what's my</h2>
              <h1>#COUNTRY CODE?</h1>
            </div>
          </section>
          <section className={styles.largeGlobe}>
            <Globe />
          </section>
        </div>
      </div>
    </main>
  );
}

export default Entry;

// TO DO - FUNCTIONALITY
// write about page
// remove mexico page
// fix rotate out of bounds
// fix nav hover

// TO DO - STYLING
// logo
// 404 pages