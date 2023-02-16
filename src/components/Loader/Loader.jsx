import { Triangle } from 'react-loader-spinner';
import { Wrapper } from './Loader.styled';

export const Loader = () => {
  return (
    <Wrapper>
      <Triangle
        height="80"
        width="80"
        color="white"
        // wrapperStyle={{
        //   position: 'fixed',
        //   top: '50%',
        //   left: '50%',
        //   transform: 'translate(-50%, -50%)',
        // }}
        // position="fixed"
        // bottom="50px"
      />
    </Wrapper>
  );
};
