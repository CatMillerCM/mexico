'use client';

import PropTypes from 'prop-types';
import { useState } from 'react';
import { layerInfo } from '@/data/layer-choices';
import styles from './choices-info.module.css';

const ChoiceInfo = ({ choice }) => {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <div className={styles.main}>
      {showInfo &&
        <div className={styles.infoBox}>
          <button type="button" className={styles.close} onClick={() => setShowInfo(false)}>X</button>
          <p className={styles.infoText}>{layerInfo[choice]}</p>
        </div>
      }
      <button type="button" className={styles.questionMark} onClick={() => setShowInfo(true)}>?</button>
    </div>
  )
};

ChoiceInfo.propTypes = {
  choice: PropTypes.string.isRequired
};

export { ChoiceInfo };