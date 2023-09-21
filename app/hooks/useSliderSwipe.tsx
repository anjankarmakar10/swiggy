import { useRef } from "react";
import { SwiperRef } from "swiper/react";

const useSliderSwipe = () => {
  const swiperRef = useRef<SwiperRef>(null);

  const slideNext = () => {
    swiperRef.current?.swiper?.slideNext();
  };
  const slidePrev = () => {
    swiperRef.current?.swiper?.slidePrev();
  };

  return { swiperRef, slideNext, slidePrev };
};
export default useSliderSwipe;
