import styled from 'styled-components';
import { GrClose } from 'react-icons/gr';

export const StyledHeader = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
  z-index: 100;
`;

export const MenuClose = styled(GrClose)`
  & > path {
    stroke: red;
  }
`;

export const BurgerContainer = styled.div`
  display: flex;
  position: relative;
  z-index: 50;
  align-items: center;
  justify-content: flex-end;
  width: 30px;
  height: 30px;
  margin-left: auto;
  cursor: pointer;

  &::before,
  &::after {
    content: '';
    position: absolute;
    height: 3px;
    width: 100%;
    background-color: blue;
    transition: all 300ms linear 0s;
  }

  &::before {
    top: 0;
  }

  &::after {
    bottom: 0;
  }

  &.active::before {
    top: 54%;
    transform: rotate(-48deg) translate(-2px, -50%);
  }

  &.active::after {
    top: 50%;
    transform: rotate(48deg) translate(0, 80%);
  }

  &.active > span {
    transform: scale(0);
  }
`;

export const Burger = styled.span`
  height: 3px;
  width: 80%;
  transform: scale(1);
  background-color: blue;
`;
