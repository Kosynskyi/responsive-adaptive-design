import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Navigation, Pagination } from 'swiper';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { sliderImages } from 'data/dataSlider';
import Container from 'components/Container';

import './Slider.css';
import { SliderWrapper } from './Slider.styled';

const Slider = () => {
  return (
    <Container>
      <SliderWrapper>
        <h2>Flower gallery</h2>
        <Swiper
          effect={'coverflow'}
          rewind={true}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          spaceBetween={-20}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1.5,
          }}
          pagination={{ clickable: true }}
          navigation={{ clickable: true }}
          modules={[EffectCoverflow, Pagination, Navigation]}
        >
          {sliderImages.map(({ item, id }) => (
            <SwiperSlide key={id}>
              <img src={item} alt={`flower_${id}`} />
            </SwiperSlide>
          ))}
        </Swiper>
      </SliderWrapper>
    </Container>
  );
};

export default Slider;
