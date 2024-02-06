import { API_KEY, BASE_URL } from "@/lib/constants";
import { useEffect, useState } from "react";

const useSearchRecipes = (query: string) => {
  const [recipes, setRecipes] = useState<SearchRecipe[] | null>(null);

  const getData = async (signal: AbortSignal, query: string) => {
    try {
      const res = await fetch(
        `${BASE_URL}/recipes/complexSearch?query=${query}&number=20&apiKey=${API_KEY}`,
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
