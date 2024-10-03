import PropTypes from 'prop-types';
import Image from 'next/image';
import { countryCoverPhotos } from '@/data/assets/country-cover-photos/index';
import styles from './card-front.module.css';

const CardFront = ({ countryName, existing }) => {
  return (
    <div className={styles.frontCard}>
      <div className={styles.frontImage}>
        <Image
          src={countryCoverPhotos[countryName]}
          alt={`Cover image of ${countryName}`}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <h2 className={styles.frontTitle}>{countryName}</h2>
      {!existing && <p className={styles.comingSoon}>Coming soon!</p>}
      <div className={styles.turnUp}></div>
    </div>
  )
};

CardFront.propTypes = {
  countryName: PropTypes.string.isRequired,
  existing: PropTypes.bool.isRequired
};


export { CardFront };