import { EffectCoverflow, Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { sliderImages } from 'data/dataSlider';
import Container from 'components/Container';
import {
  SliderWrapper,
  SliderTitle,
  StyledSwiper,
  StyledSwiperSlide,
  SwiperImage,
} from './Slider.styled';

const Slider = () => {
  return (
    <Container>
      <SliderWrapper>
        <SliderTitle>Flower gallery</SliderTitle>
        <StyledSwiper
          initialSlide={2}
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
            <StyledSwiperSlide key={id}>
              <SwiperImage src={item} alt={`flower_${id}`} />
            </StyledSwiperSlide>
          ))}
        </StyledSwiper>
      </SliderWrapper>
    </Container>
  );
};

export default Slider;
