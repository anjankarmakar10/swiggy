"use client";
import Link from "next/link";
import categories from "../data/categories";
import SliderArrows from "./SliderArrows";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
const CategoryList = () => {
  return (
    <section className="max-w-[1036px] mx-auto px-4 pt-8">
      <header className="flex items-center justify-between ">
        <h2 className="font-bold text-2xl">What's on your mind?</h2>
        <div>
          <SliderArrows />
        </div>
      </header>
      <div>
        <Swiper
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
              <Link href={"/"}>
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
