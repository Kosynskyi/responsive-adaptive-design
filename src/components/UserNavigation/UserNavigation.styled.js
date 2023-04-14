import styled from 'styled-components';
import { breakpoints } from 'services/mixins/mixins';

export const NavigationList = styled.ul`
  display: flex;
  flex-direction: column;

  @media ${breakpoints.minTablet} {
    flex-direction: row;
  }
`;

export const NavigationItem = styled.li`
  padding: 15px 5px;
  outline: 1px solid yellow;
  background-color: green;

  @media ${breakpoints.minTablet} {
    margin-right: 20px;

    &:last-child {
      margin-right: 0;
    }
  }
`;

export const NavLink = styled.a`
  padding: 15px 5px;
  color: white;
`;
