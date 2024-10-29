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
  }, [router]);

  return (
    <main className={styles.main}>
      <div className={styles.content}>
        <div className={styles.starryNight}></div>
        <div className={styles.entry}>
          <div className={styles.globe}>
            <Globe />
          </div>
          <div className={styles.logo}>
            <Image
              src={condensedLogo}
              alt="What's my country code condensed logo"
              priority={true}
            />
            <Image
              src={fullLogo}
              alt="What's my country code logo"
              priority={true}
            />
          </div>
        </div>
        <Plane entry />
      </div>
    </main>
  );
}

export default Entry;
