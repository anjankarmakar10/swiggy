"use client";
import { Swiper, SwiperSlide } from "swiper/react";

import useSliderSwipe from "../hooks/useSliderSwipe";
import Recipe from "./RecipeCard";
import SliderArrows from "./SliderArrows";
import Skeleton from "./Skeleton";
import useRecipes from "../hooks/useRecipes";
const PopularRecipes = () => {
  const { swiperRef, slideNext, slidePrev } = useSliderSwipe();

  const { data, isLoading, isError } = useRecipes();
  const recipes = data?.recipes?.filter((recipe) => recipe.veryHealthy);

  return (
    <section className="max-w-[1036px] mx-auto px-4 ">
      <header className="flex items-center justify-between mb-4">
        <h2 className="font-bold text-2xl">Popular recipes </h2>
        <div>
          <SliderArrows slideNext={slideNext} slidePrev={slidePrev} />
        </div>
      </header>
      <div>
        {isLoading && (
          <div className="flex gap-4 md:gap-8">
            <div className="w-full">
              <Skeleton />
            </div>
            <div className="w-full hidden sm:block">
              <Skeleton />
            </div>
            <div className=" w-full hidden md:block">
              <Skeleton />
            </div>
          </div>
        )}

        <Swiper
          ref={swiperRef}
          slidesPerView={2}
          spaceBetween={30}
          breakpoints={{
            480: {
              width: 480,
              slidesPerView: 1,
            },
            768: {
              width: 768,
              slidesPerView: 2,
            },
            1024: {
              width: 1024,
              slidesPerView: 3,
            },
          }}
        >
          {recipes?.map((recipe) => (
            <SwiperSlide key={recipe.id}>
              <Recipe recipe={recipe} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};
export default PopularRecipes;
