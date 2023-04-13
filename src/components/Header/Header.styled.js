import styled from 'styled-components';
import { GiHamburgerMenu } from 'react-icons/gi';

export const StyledHeader = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const BurgerMenu = styled(GiHamburgerMenu)`
  color: blue;
`;
