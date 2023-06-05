import styled from 'styled-components';

export const StyledFaqMainTitle = styled.h2`
  margin-bottom: 70px;
  font-weight: 750;
  font-size: 80px;
  line-height: 130%;
  color: #193636;
  text-align: center;
`;

export const StyledFaqItem = styled.li`
  padding: 20px 84px;
  background: ${({ isOpen }) => (isOpen ? 'white' : '#e8ebeb')};
  border-radius: 20px;
  position: relative;
  border: ${({ isOpen }) => isOpen && '1px solid #193636'};

  &::before {
    width: 12px;
    height: 12px;
    border-top: 2px solid black;
    border-right: 2px solid black;
    border-radius: 2px;
    top: 33px;
    right: 70px;
    /* transform: ; */
    /* margin-right: 60px; */
    transform: ${({ isOpen }) =>
      isOpen ? 'rotate(-45deg)' : 'rotate(135deg)'};
    content: '';
    position: absolute;
    transition: 0.3s ease all;
  }
`;

export const StyledFaqSubTitle = styled.h3`
  margin-bottom: 40px;
  color: #193636;
  font-weight: 750;
  font-size: 30px;
  line-height: 140%;
`;

export const StyledFaqItemTitle = styled.h4`
  margin-bottom: ${({ isOpen }) => isOpen && '30px'};
  color: #193636;
  font-weight: 700;
  font-size: 22px;
  line-height: 150%;
`;

export const StyledFaqText = styled.p`
  color: #193636;
  font-weight: 400;
  font-size: 18px;
  line-height: 170%;
`;
