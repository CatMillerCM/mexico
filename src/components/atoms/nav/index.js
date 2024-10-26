import PropTypes from 'prop-types';
import Link from 'next/link';
import Image from 'next/image';
import { Globe } from '@/components/atoms/globe';
import { navNames, catMiller } from '@/data/assets/nav';
import styles from './nav.module.css';

const Nav = ({ pageNames }) => {
  return (
    <div className={styles.nav} >
      {pageNames.map((page) => (
        <Link className={styles.link} key={page} href={`/${page}`}>
          <div className={styles.navName}>
            <Image
              src={navNames[page]}
              alt={page}
            />
          </div>
          { page === 'home'
          ? <div className={styles.globe}>
            <Globe/>
          </div>
          : <div className={styles.aboutImage}>
            <Image
              src={catMiller}
              alt={'Image of Cat Miller to navigate to "About"'}
            />
          </div>
          }
        </Link>
      ))}
    </div>
  )
};

Nav.propTypes = {
  pageNames: PropTypes.array.isRequired
};

export { Nav };