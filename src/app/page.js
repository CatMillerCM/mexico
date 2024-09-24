'use client'

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import styles from './entry.module.css';

const Entry = () => {
  const router = useRouter();
  const [animationGo, setAnimationGo] = useState(false);

  const handleClick = () => {
    setAnimationGo(true);

    setTimeout(() => {
      router.push('/home');
    }, 750);
  };

  return (
    <main className={styles.entry}>
      <img
        className={styles.globe}
        src="https://pngimg.com/d/globe_PNG61.png"
        alt="globe"
      />
      <div className={styles.logo}>
        <h2>what's my</h2>
        <h1>#COUNTRY CODE?</h1>
      </div>
      <button className={styles.button} onClick={handleClick}>
        Hello, world!
      </button>
      <div className={styles.plane}>
        <svg className={styles.planeTrail}>
          <path
            d="M50,80 C100,80 150,60 250,40 C350,10 450,40 550,50"
            stroke="white"
            stroke-width="2"
            stroke-dasharray="5, 5"
            fill="transparent"
          />
        </svg>
        <img
          className={`${styles.planeImg} ${animationGo ? styles.fly : ''}`}
          src="https://freedesignfile.com/image/preview/14728/airplane-cartoon--plane-drawing-clipart.png"
          alt="plane"
        />
      </div>
    </main>
  );
}

export default Entry;
