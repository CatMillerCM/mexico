import PropTypes from 'prop-types';
import Image from 'next/image';
import codingCat from '@/data/assets/cat-gifs/coding-cat.gif';
import styles from './card-back.module.css';

const CardBack = ({ countryName, project, isFlipped, projectExists = false }) => {
  return (
  <div className={`${styles.backCard} ${isFlipped ? styles.isFlipped : ''} ${!projectExists ? styles.noCursor : ''}`}>
    <div className={styles.titles}>
      <h3 className={styles.backTitle}>{countryName}</h3>
      <h2 className={styles.projectTitle}>{project?.projectName || 'Project Incoming'}</h2>
    </div>
    <div className={styles.backImage}>
      <Image
        src={project?.cardImage.src || codingCat}
        alt={project?.cardImage.alt || 'Gif of a cat frantically coding - work in progress!'}
        layout="fill"
        objectFit="cover"
        unoptimized
      />
    </div>
    <p className={styles.summary}>{project?.cardSummary || 'Good things come to those who wait...'}</p>
    {Boolean(project) && <p className={styles.readMore}>Read more</p>}
  </div>
  )
};

CardBack.propTypes = {
  countryName: PropTypes.string.isRequired,
  project: PropTypes.object,
  isFlipped: PropTypes.bool.isRequired,
  projectExists: PropTypes.bool.isRequired
};

export { CardBack };