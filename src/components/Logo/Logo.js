import { useRef } from 'react';
import { StyledLogo, LogoName } from './Logo.styled';

const Logo = () => {
  const refLogo = useRef();
  // console.log('refLogo', refLogo);
  // console.log('refLogo', refLogo.current);
  // console.log(333);
  return (
    <StyledLogo ref={refLogo}>
      <LogoName>L</LogoName>
    </StyledLogo>
  );
};

export default Logo;
