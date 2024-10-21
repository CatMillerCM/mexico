'use client';

import PropTypes from 'prop-types';
import { Plane } from '@/components/atoms/plane';
import { Location } from '@/components/molecules/location';
import { Socials } from '@/components/molecules/socials';
import { motion } from 'framer-motion';
import { useTransitionState } from 'next-transition-router';
import styles from './header.module.css';

const Header = ({ isHomeOrAboutPage, isCountriesAnimated }) => {
  const { stage } = useTransitionState();

  const variants = {
    entering: { translateX: '-50vw' },
    leaving: { translateX: '50vw' }
  };

  return (
    <div className={styles.header}>
      <h2>LOGO HERE</h2>
      {isHomeOrAboutPage && <Location
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
  isHomeOrAboutPage: PropTypes.bool,
  isCountriesAnimated: PropTypes.bool,
};

export { Header };