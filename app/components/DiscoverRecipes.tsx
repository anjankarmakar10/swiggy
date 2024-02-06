"use client";

import useRecipes from "../hooks/useRecipes";
import RecipeCard from "./RecipeCard";
import Skeleton from "./Skeleton";

const DiscoverRecipes = () => {
  const { data, isLoading } = useRecipes();

  console.log(data?.recipes);

  return (
    <section className="max-w-[1036px] mx-auto px-4 ">
      <header className="flex items-center justify-between mb-4">
        <h2 className="font-bold text-2xl">Discover new recipes </h2>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4  pb-8">
        {isLoading &&
          Array(10)
            .fill("@")
            .map((_, i) => <Skeleton key={i} />)}
        {data?.recipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </section>
  );
};
export default DiscoverRecipes;
