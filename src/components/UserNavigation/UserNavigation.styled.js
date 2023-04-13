import styled from 'styled-components';

export const NavigationList = styled.ul`
  display: flex;
  flex-direction: row;
`;

export const NavigationItem = styled.li`
  margin-right: 20px;
  padding: 15px 5px;
  outline: 1px solid yellow;
  background-color: green;

  &:last-child {
    margin-right: 0;
  }
`;

export const NavLink = styled.a`
  padding: 15px 5px;
  color: white;
`;
