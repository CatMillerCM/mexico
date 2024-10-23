import Image from 'next/image';
import Link from 'next/link';
import huhCat from '@/data/assets/cat-gifs/huh-cat.gif';
import styles from './not-found-ready.module.css';

const NotFound = () => {
  return (
    <main className={styles.notFound}>
      <h2 className={styles.uhOh}>Uh oh!</h2>
      <Image
        src={huhCat}
        alt='Gif of a cat going "huh"'
        unoptimized
      />
      <div>
        <p>Seems like you've travelled too far and got lost!</p>
        <p>Head <Link href='/home' className={styles.link}>home</Link> before visiting a new country!</p>
      </div>
    </main>
  );
}

export default NotFound;
