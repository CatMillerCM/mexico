'use client'

import PropTypes from 'prop-types';
import Link from 'next/link';
import { useState } from 'react';
import { projects } from '@/data/projects';
import styles from './card.module.css';
import { CardFront } from '@/components/atoms/card-front';
import { CardBack } from '@/components/atoms/card-back';

const Card = ({ countryName, isCentreCard }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleCardClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div
      className={styles.cardContainer}
      onClick={handleCardClick}
    >
      <CardFront
        countryName={countryName}
        existing={Boolean(projects[countryName])}
      />
      {projects[countryName]
      ?
      <Link href={`/${countryName.replace(/\s+/g, '-')}`}>
        <CardBack
          countryName={countryName}
          project={projects[countryName]}
        />
      </Link>
      :
      <CardBack
        project={projects[countryName]}
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