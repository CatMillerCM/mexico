import PropTypes from 'prop-types';
import { Taco } from '@/components/atoms/taco';
import { Button } from '@/components/atoms/button';

const Finish = ({ chosen, setChosen, setStep }) => {
  const handleNewTaco = () => {
    setChosen({});
    setStep(0);
  }

  return (
    <>
      <h2>Taco complete!</h2>
      <Taco chosen={chosen} isFinal/>
      <p>I'm still hungry...</p>
      <Button onClick={handleNewTaco} label="Make another one!" />
    </>
  )
};

Finish.propTypes = {
  chosen: PropTypes.object.isRequired,
  setChosen: PropTypes.func.isRequired,
  setStep: PropTypes.func.isRequired
};

export { Finish };