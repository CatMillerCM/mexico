'use client';

import PropTypes from 'prop-types';
import Image from 'next/image';
import Link from 'next/link';
import { Plane } from '@/components/atoms/plane';
import { Location } from '@/components/molecules/location';
import { Socials } from '@/components/molecules/socials';
import { motion } from 'framer-motion';
import { useTransitionState } from 'next-transition-router';
import { fullLogo } from '@/data/assets/logos';
import styles from './header.module.css';

const Header = ({ isHomePage, isAboutPage, isCountriesAnimated }) => {
  const { stage } = useTransitionState();

  const variants = {
    entering: { translateX: '-50vw' },
    leaving: { translateX: '50vw' }
  };

  return (
    <div className={styles.header}>
      <Link className={`${styles.logo} ${isHomePage ? styles.noCursor : ''}`} href={`/home`}>
        <Image 
          src={fullLogo}
          alt="What's my country code logo"
        />
      </Link>
      {(isHomePage || isAboutPage) && <Location
        isCountriesAnimated={isCountriesAnimated}
      />}
      <Socials />
      <motion.div
        initial={{ translateX: '-100vw' }}
        animate={stage === 'leaving' ? variants.leaving : variants.entering}
        transition={{ duration: 1 }}
      >
        <Plane />
      </motion.div>
    </div>
  )
};

Location.propTypes = {
  isHomePage: PropTypes.bool,
  isAboutPage: PropTypes.bool,
  isCountriesAnimated: PropTypes.bool
};

export { Header };