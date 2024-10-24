'use client';

import Image from 'next/image';
import { useEffect } from 'react';
import { useTransitionRouter } from 'next-transition-router';
import { Plane } from '@/components/atoms/plane';
import { Globe } from '@/components/atoms/globe';
import { condensedLogo, fullLogo } from '@/data/assets/logos';
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
        <div className={styles.entry}>
          <div className={styles.globe}>
            <Globe />
          </div>
          <div className={styles.logo}>
            <Image src={condensedLogo} alt="What's my country code condensed logo"/>
            <Image src={fullLogo} alt="What's my country code logo"/>
          </div>
        </div>
        <Plane entry />
      </div>
    </main>
  );
}

export default Entry;

// TO DO
// write about page
// remove mexico page
// add correct about and home images
// get plane arc intro/exit working
// get entry plane path good
// fix side margin of about/home buttons
// box shadow on selected card
// new colours all over
// blog page - as scroll background increases in colour?
// carousel turn up only on cards that have back/project
// logo on each page
// favicon