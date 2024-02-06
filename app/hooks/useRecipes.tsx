import { API_KEY, BASE_URL } from "@/lib/constants";
import { useEffect, useState } from "react";

const useRecipes = () => {
  const [recipes, setRecipes] = useState<Recipe[] | null>(null);

  const getData = async (signal: AbortSignal) => {
    try {
      const res = await fetch(
        `${BASE_URL}/recipes/random?number=10&tags=vegetarian,chicken&apiKey=${API_KEY}`,
        { signal }
      );

      const { recipes } = await res.json();
      setRecipes(recipes);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    getData(signal);

    return () => controller.abort();
  }, []);

  return { recipes };
};
export default useRecipes;
