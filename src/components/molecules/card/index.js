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

  const handleCardClick = () => {
    if (!isCentreCard) return;
    setIsFlipped(!isFlipped);
  };

  useEffect(() => {
    setIsFlipped(false);
  }, [isCentreCard])

  return (
    <div
      className={styles.cardContainer}
      onClick={handleCardClick}
    >
      <CardFront
        countryName={countryName}
        existing={Boolean(projects[countryName])}
        isFlipped={isFlipped}
      />
      {projects[countryName]
      ?
      <Link href={`/${countryName.replace(/\s+/g, '-')}`}>
        <CardBack
          countryName={countryName}
          project={projects[countryName]}
          isFlipped={isFlipped}
        />
      </Link>
      :
      <CardBack
        project={projects[countryName]}
        isFlipped={isFlipped}
      />
      }
    </div >
  );
};

Card.propTypes = {
  countryName: PropTypes.string.isRequired,
  isCentreCard: PropTypes.bool.isRequired
};

export { Card };