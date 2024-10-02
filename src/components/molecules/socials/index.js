import Link from 'next/link';
import Image from 'next/image';
import { githubIcon, instagramIcon, linkedInIcon } from '@/data/social-icons';
import styles from './socials.module.css';

const Socials = () => {
  return (
    <div className={styles.socials}>
      <Link className={styles.github} href="https://github.com/CatMillerCM">
        <Image
          src={githubIcon}
          alt={`Github - github.com/CatMillerCM`}
        />
      </Link>
      <Link className={styles.linkedin} href="https://www.linkedin.com/in/cat-miller/">
        <Image
          src={linkedInIcon}
          alt={`LinkedIn - linkedin.com/in/cat-miller`}
        />
      </Link>
      <Link className={styles.instagram} href="https://www.instagram.com/catcattiecat/">
        <Image
          src={instagramIcon}
          alt={`Instagram - instagram.com/catcattiecat`}
        />
      </Link>
    </div>
  )
};

export { Socials };