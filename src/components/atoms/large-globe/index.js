'use client';

import { useEffect } from 'react';
import { useTransitionRouter } from 'next-transition-router';
import styles from './large-globe.module.css';

const LargeGlobe = () => {
  const router = useTransitionRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push('/home');
    }, 6000);
  }, []);

  return (
    <div>
      <div className={styles.largeGlobe}></div>
    </div>
  );
}

export { LargeGlobe };