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
