import PropTypes from 'prop-types';
import Link from 'next/link';
import Image from 'next/image';
import { pageNavPhotos } from '@/data/assets/page-nav-photos';
import styles from './nav.module.css';

const Nav = ({ pageNames }) => {
  return (
    <div className={styles.nav} >
      {pageNames.map((page) => (
      <Link className={styles.link} key={page} href={`/${page}`}>
        <p className={styles.pageName}>{page}</p>
        <Image
          src={pageNavPhotos[page]}
          alt={page === 'home' ? 'Image of a globe to navigate to "Home"' : 'Image of Cat Miller to navigate to "About"'}
          objectFit="cover"
        />
      </Link>
      ))}
    </div>
  )
};

Nav.propTypes = {
  pageNames: PropTypes.array.isRequired
};

export { Nav };