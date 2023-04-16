import styled from 'styled-components';
import { breakpoints } from 'services/mixins/mixins';

export const CardSection = styled.section`
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to bottom,
    rgba(236, 232, 157, 1) 0%,
    rgba(64, 83, 15, 1) 40%,
    rgba(24, 161, 164, 1) 100%
  );
`;

export const CardList = styled.ul`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 15px;
  grid-row-gap: 15px;
  padding-top: 30px;

  @media ${breakpoints.onlyTablet} {
    grid-template-columns: repeat(2, 1fr);
  }

  @media ${breakpoints.onlyLaptop} {
    grid-template-columns: repeat(3, 1fr);
  }

  @media ${breakpoints.desktop} {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const CardItem = styled.li`
  padding: 20px 10px;
  border: 1px solid yellow;
  border-radius: 4px;
`;

export const FakeImg = styled.div`
  margin: 0 auto;
  margin-bottom: 15px;
  height: 150px;
  background-color: yellowgreen;
`;

export const Title = styled.h2`
  text-align: center;
  margin-bottom: 10px;

  @media ${breakpoints.minTablet} {
    color: rgba(255, 255, 255, 0.9);
  }
`;

export const DescrWrapper = styled.div`
  cursor: pointer;

  @media ${breakpoints.maxMobile} {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const Description = styled.h3`
  margin-bottom: 10px;
  text-align: center;

  @media ${breakpoints.minTablet} {
    color: rgba(255, 255, 255, 0.7);
  }
`;

export const Text = styled.p`
  @media ${breakpoints.minTablet} {
    color: rgba(255, 255, 255, 0.5);
  }
`;
