import Image from 'next/image';
import Link from 'next/link';
import sideEyeCat from '@/data/assets/cat-gifs/side-eye-cat.gif';
import styles from './not-found-ready.module.css';

const NotReady = () => {
  return (
    <main className={styles.notReady}>
      <h2 className={styles.uhOh}>Uh oh!</h2>
      <Image
        src={sideEyeCat}
        alt='Gif of a cat side-eyeing the camera'
        unoptimized
      />
      <div>
        <p className={styles.firstLine}>Looks like there's nothing here... yet.</p>
        <p>Pack your bags and check back soon.</p>
        <p>In the meantime, head <Link href='/home' className={styles.link}>home</Link> for a rest!</p>
      </div>
    </main>
  );
}

export default NotReady;