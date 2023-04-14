import styled from 'styled-components';
import { breakpoints } from 'services/mixins/mixins';

export const ContainerWrapper = styled.div`
  margin: 0 auto;
  padding: 0 15px;
  max-width: 1200px;
  background-color: rgba(0, 0, 0, 0.1);

  outline: 1px solid red;

  @media ${breakpoints.onlyTablet} {
    background-color: rgba(0, 0, 0, 0.3);
  }

  @media ${breakpoints.onlyLaptop} {
    background-color: rgba(0, 0, 0, 0.5);
  }

  @media ${breakpoints.desktop} {
    background-color: rgba(0, 0, 0, 0.7);
  }
`;
