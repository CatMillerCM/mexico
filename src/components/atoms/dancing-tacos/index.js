import Image from 'next/image';
import { taco } from '@/assets';
import styles from './dancing-tacos.module.css';

const DancingTacos = () => {
  return (
    <div className={styles.tacoImages}>
      <Image src={taco} alt="taco"/>
      <Image src={taco} alt="taco"/>
      <Image src={taco} alt="taco"/>
    </div>
  )
};

export { DancingTacos };