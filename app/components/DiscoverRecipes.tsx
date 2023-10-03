"use client";

import useRecipes from "../hooks/useRecipes";
import Recipe from "./Recipe";

const DiscoverRecipes = () => {
  const { recipes } = useRecipes();

  return (
    <section className="max-w-[1036px] mx-auto px-4 ">
      <header className="flex items-center justify-between mb-4">
        <h2 className="font-bold text-2xl">Discover new restaurants </h2>
      </header>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8 pb-8">
        {recipes?.map((recipe) => (
          <Recipe key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </section>
  );
};
export default DiscoverRecipes;
