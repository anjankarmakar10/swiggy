import { useEffect, useState } from "react";

const useSearchRecipes = (query: string) => {
  const [recipes, setRecipes] = useState<SearchRecipe[] | null>(null);

  const getData = async (signal: AbortSignal, query: string) => {
    try {
      const res = await fetch(
        `https://api.spoonacular.com/recipes/complexSearch?query=${query}&number=20&apiKey=a76824713af44b9196b97ffd944fb3eb`,
        { signal }
      );

      const { results } = await res.json();
      setRecipes(results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    getData(signal, query);
    return () => controller.abort();
  }, [query]);

  return { recipes };
};
export default useSearchRecipes;
