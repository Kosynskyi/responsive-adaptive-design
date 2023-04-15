import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import { breakpoints } from 'services/mixins/mixins';

export const SliderWrapper = styled.div`
  padding-top: 20px;
  font-size: 20px;

  @media ${breakpoints.onlyTablet} {
    padding-top: 30px;
    font-size: 24px;
  }

  @media ${breakpoints.onlyLaptop} {
    padding-top: 35px;
    font-size: 28px;
  }

  @media ${breakpoints.desktop} {
    padding-top: 40px;
    font-size: 32px;
  }
`;

export const SliderTitle = styled.h2`
  text-align: center;
`;

export const StyledSwiper = styled(Swiper)`
  &.swiper {
    width: 100%;
    padding-top: 20px;
    padding-bottom: 40px;

    @media ${breakpoints.onlyTablet} {
      padding-top: 30px;
    }

    @media ${breakpoints.onlyLaptop} {
      padding-top: 35px;
    }

    @media ${breakpoints.desktop} {
      padding-top: 40px;
    }
  }

  & div.swiper-button-next,
  & div.swiper-button-prev {
    @media ${breakpoints.maxMobile} {
      visibility: hidden;
    }
  }
`;

export const StyledSwiperSlide = styled(SwiperSlide)`
  &.swiper-slide {
    background-position: center;
    background-size: cover;
    width: 300px;
    height: 380px;
  }

  &.swiper-slide-shadow-left,
  .swiper-slide-shadow-right {
    display: none;
  }
`;

export const SwiperImage = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  border-radius: 16px;
`;
