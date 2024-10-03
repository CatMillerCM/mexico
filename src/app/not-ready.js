import Image from 'next/image';
import sideEyeCat from '@/data/assets/cat-gifs/side-eye-cat.gif';
import styles from './not-ready.module.css';

const NotReady = () => {
  return (
    <main className={styles.notReady}>
      <p>Uh oh!</p>
      <p>Looks like there's nothing here... yet.</p>
      <Image
        src={sideEyeCat}
        alt='Gif of a cat side-eyeing the camera'
        unoptimized
      />
      <p>Check back soon!</p>
    </main>
  );
}

export default NotReady;