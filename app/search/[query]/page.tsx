"use client";

import SearchRecipe from "@/app/components/SearchRecipe";
import useSearchRecipes from "@/app/hooks/useSearchRecipes";
import Link from "next/link";

interface Params {
  params: {
    query: string;
  };
}
const page = ({ params: { query } }: Params) => {
  const { recipes } = useSearchRecipes(query);

  return (
    <section className="max-w-[1036px] mx-auto px-4 pt-8">
      <h2 className="text-center font-bold text-xl px-8 py-2 bg-rose-500 text-white mb-8">
        {query}
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 pb-8">
        {recipes?.map((recipe) => (
          <Link href={`/recipe/${recipe.id}`} key={recipe.id}>
            <SearchRecipe recipe={recipe} />
          </Link>
        ))}
      </div>
    </section>
  );
};
export default page;
