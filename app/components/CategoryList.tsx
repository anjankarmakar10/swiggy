"use client";
import Link from "next/link";
import categories from "../data/categories";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import useSliderSwipe from "../hooks/useSliderSwipe";
import SliderArrows from "./SliderArrows";

const CategoryList = () => {
  const { swiperRef, slideNext, slidePrev } = useSliderSwipe();

  return (
    <section className="max-w-[1036px] mx-auto px-4 pt-8">
      <header className="flex items-center justify-between ">
        <h2 className="font-bold text-2xl">What's on your mind?</h2>
        <div>
          <SliderArrows slideNext={slideNext} slidePrev={slidePrev} />
        </div>
      </header>
      <div className="swipe">
        <Swiper
          ref={swiperRef}
          slidesPerView={2}
          spaceBetween={30}
          breakpoints={{
            480: {
              width: 480,
              slidesPerView: 3,
            },
            768: {
              width: 768,
              slidesPerView: 4,
            },
            1024: {
              width: 1024,
              slidesPerView: 6,
            },
          }}
        >
          {categories.map((category) => (
            <SwiperSlide key={category.id}>
              {/* <Link href={`/search/${category.title}`}> */}
              <Link
                href={{
                  pathname: `/search/${category.title}`,
                  query: { from: "category" },
                }}
              >
                <Image
                  src={category.image}
                  height={180}
                  width={144}
                  alt={category.title}
                />
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};
export default CategoryList;
