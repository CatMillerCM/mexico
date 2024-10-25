'use client'

import PropTypes from 'prop-types';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { projects } from '@/data/projects';
import styles from './card.module.css';
import { CardFront } from '@/components/atoms/card-front';
import { CardBack } from '@/components/atoms/card-back';

const Card = ({ countryName, isCentreCard }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const projectExists = Boolean(projects[countryName]);

  const handleCardClick = () => {
    if (!isCentreCard || !projectExists) return;
    setIsFlipped(!isFlipped);
  };

  useEffect(() => {
    setIsFlipped(false);
  }, [isCentreCard])

  return (
    <div
      className={`${styles.cardContainer} ${!projectExists && isCentreCard ? styles.noCursor : ''} ${isCentreCard ? styles.centreCard : ''}`}
      onClick={handleCardClick}
    >
      <CardFront
        countryName={countryName}
        existing={projectExists}
        isFlipped={isFlipped}
      />
      {projectExists &&
        <Link href={`/${countryName.replace(/\s+/g, '-')}`} prefetch>
          <CardBack
            countryName={countryName}
            project={projects[countryName]}
            isFlipped={isFlipped}
          />
        </Link>
      }
    </div >
  );
};

Card.propTypes = {
  countryName: PropTypes.string.isRequired,
  isCentreCard: PropTypes.bool.isRequired
};

export { Card };