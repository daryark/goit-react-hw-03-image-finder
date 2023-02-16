import PropTypes from 'prop-types';
import { Button } from './Button.styled';
export const Btn = ({ text, btnClick }) => {
  return (
    <>
      <Button onClick={btnClick}>{text}</Button>
    </>
  );
};

Btn.propTypes = {
  text: PropTypes.string.isRequired,
  btnClick: PropTypes.func.isRequired,
};
