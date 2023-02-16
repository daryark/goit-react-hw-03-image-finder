import { Button } from './Button.styled';
export const Btn = ({ text, btnClick }) => {
  return (
    <>
      <Button onClick={btnClick}>{text}</Button>
    </>
  );
};
