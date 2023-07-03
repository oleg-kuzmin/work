//# npm install swiper

//# Navigation.jsx
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import './Navigation.scss';

function Navigation() {
  return (
    <nav className="navigation">
      <Swiper slidesPerView={'auto'} spaceBetween={30} freeMode={true} modules={[FreeMode]}>
        <SwiperSlide className="navigation__element">Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
    </nav>
  );
}

//# Navigation.scss
/*
.navigation {
  width: 100%;
  height: 100%;
  &__element {
    width: max-content;
    height: ******;
  }
}
*/
