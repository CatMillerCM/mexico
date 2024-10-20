import Image from 'next/image';
import worldMap from '@/data/assets/world-map.png';
import styles from './globe.module.css';

const Globe = () => {
  return (
    <div className={styles.globeContainer}>
      <div className={styles.globeShadows}></div>
      <Image
        src={worldMap}
        alt="Rotating Globe"
        className={styles.globeImage}
        priority={true} />
    </div>
  );
}

export { Globe };