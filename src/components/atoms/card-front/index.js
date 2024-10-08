import PropTypes from 'prop-types';
import Image from 'next/image';
import { countryCoverPhotos } from '@/data/assets/country-cover-photos/index';
import styles from './card-front.module.css';

const CardFront = ({ countryName, existing, isFlipped }) => {
  return (
    <div className={`${styles.frontCard} ${isFlipped ? styles.isFlipped : ''}`}>
      <div className={styles.frontImage}>
        <Image
          src={countryCoverPhotos[countryName]}
          alt={`Cover image of ${countryName}`}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className={styles.frontTitle}>
        <h2>{countryName}</h2>
        {!existing && <p>Coming soon!</p>}
      </div>
      <div className={styles.turnUp}></div>
    </div>
  )
};

CardFront.propTypes = {
  countryName: PropTypes.string.isRequired,
  existing: PropTypes.bool.isRequired,
  isFlipped: PropTypes.bool.isRequired
};


export { CardFront };