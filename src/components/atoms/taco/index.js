import PropTypes from 'prop-types';
import Image from 'next/image';
import { layerImages } from '@/data/layer-choices';
import styles from './taco.module.css';

const Taco = ({ chosen, isFinal = false }) => {
  return (
    <div className={`${styles.main} ${isFinal ? styles.final : ''}`}>
    {Object.keys(chosen).map((key) => {
      return chosen[key] && chosen[key][0] !== 'Ninguno' && chosen[key].map((choice) => {
        return (
          <Image
            src={layerImages[choice].src}
            alt={choice}
            layout="fill"
            unoptimized
          />
        )
      })
    })}
  </div>
  )
};

Taco.propTypes = {
  chosen: PropTypes.object.isRequired,
  isFinal: PropTypes.bool
};

export { Taco };