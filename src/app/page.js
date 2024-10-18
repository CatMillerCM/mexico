'use client';

import { Plane } from '@/components/atoms/plane';
import { LargeGlobe } from '@/components/atoms/large-globe';
import styles from './entry.module.css';

const Entry = () => {
  return (
    <main className={styles.main}>
      <div className={styles.content}>
        <div className={styles.starryNight}></div>
        <Plane entry />
        <div className={styles.sections}>
          <section className={styles.entry}>
            <div className={styles.earth}></div>
            <div className={styles.logo}>
              <h2>what's my</h2>
              <h1>#COUNTRY CODE?</h1>
            </div>
          </section>
          <section className={styles.largeGlobe}>
            <LargeGlobe />
          </section>
        </div>
      </div>
    </main>
  );
}

export default Entry;

// TO DO - FUNCTIONALITY
// plane
// write about page
// remove mexico page

// TO DO - STYLING
// logo
// nav
// general page colours

// STRETCH GOALS
// add country flags
// add country numbers
// get images to load better