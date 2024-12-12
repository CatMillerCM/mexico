import Image from 'next/image';
import taco from '@/assets/taco.png';
import styles from './dancing-tacos.module.css';

const DancingTacos = () => {
  return (
    <div className={styles.tacoImages}>
      <Image src={taco} alt="taco" unoptimized/>
      <Image src={taco} alt="taco" unoptimized/>
      <Image src={taco} alt="taco" unoptimized/>
    </div>
  )
};

export { DancingTacos };