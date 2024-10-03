import Image from 'next/image';
import huhCat from '@/data/assets/cat-gifs/huh-cat.gif';
import styles from './not-found.module.css';

const NotFound = () => {
  return (
    <main className={styles.notFound}>
      <p>Uh oh!</p>
      <p>Seems like you've travelled too far and got lost!</p>
      <Image
        src={huhCat}
        alt='Gif of a cat going "huh"'
        unoptimized
      />
    </main>
  );
}

export default NotFound;
