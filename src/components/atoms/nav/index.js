import Link from 'next/link';
import styles from './nav.module.css';

const Nav = ({ pageName }) => {
  return (
    <div className={styles.nav} >
      <Link className={styles.link} href={`/${pageName}`}>{pageName}</Link>
    </div>
  )
};

export { Nav };