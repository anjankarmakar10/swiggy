"use client";

import useRecipes from "../hooks/useRecipes";
import RecipeCard from "./RecipeCard";
import Skeleton from "./Skeleton";

const DiscoverRecipes = () => {
  const { recipes } = useRecipes();

  return (
    <section className="max-w-[1036px] mx-auto px-4 ">
      <header className="flex items-center justify-between mb-4">
        <h2 className="font-bold text-2xl">Discover new restaurants </h2>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4  pb-8">
        {recipes
          ? recipes?.map((recipe) => (
              <RecipeCard key={recipe.id} recipe={recipe} />
            ))
          : Array(10)
              .fill("@")
              .map((_, i) => <Skeleton key={i} />)}
      </div>
    </section>
  );
};
export default DiscoverRecipes;
