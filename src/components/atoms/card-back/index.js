import PropTypes from 'prop-types';
import Image from 'next/image';
import styles from './card-back.module.css';

const CardBack = ({ countryName, project, isFlipped }) => {
  return (
  <div className={`${styles.backCard} ${isFlipped ? styles.isFlipped : ''}`}>
    <div className={styles.titles}>
      <h3 className={styles.backTitle}>{countryName}</h3>
      <h2 className={styles.projectTitle}>{project.projectName}</h2>
    </div>
    <div className={styles.backImage}>
      <Image
        src={project.cardImage.src}
        alt={project.cardImage.alt}
        layout="fill"
        objectFit="cover"
        unoptimized
      />
    </div>
    <p className={styles.summary}>{project.cardSummary}</p>
    <p className={styles.readMore}>Read more</p>
  </div>
  )
};

CardBack.propTypes = {
  countryName: PropTypes.string.isRequired,
  project: PropTypes.object,
  isFlipped: PropTypes.bool.isRequired
};

export { CardBack };