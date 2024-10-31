import Link from 'next/link';
import Image from 'next/image';
import { githubIcon, instagramIcon, linkedInIcon } from '@/data/assets/social-icons';
import styles from './socials.module.css';

const Socials = () => {
  return (
    <div className={styles.socials}>
      <Link href="https://github.com/CatMillerCM" target="_blank">
        <Image
          src={githubIcon}
          alt={`Github - github.com/CatMillerCM`}
        />
      </Link>
      <Link href="https://www.linkedin.com/in/cat-miller/" target="_blank">
        <Image
          src={linkedInIcon}
          alt={`LinkedIn - linkedin.com/in/cat-miller`}
        />
      </Link>
      <Link href="https://www.instagram.com/catcattiecat/" target="_blank">
        <Image
          src={instagramIcon}
          alt={`Instagram - instagram.com/catcattiecat`}
        />
      </Link>
    </div>
  )
};

export { Socials };