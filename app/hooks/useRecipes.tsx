import { useEffect, useState } from "react";

const useRecipes = () => {
  const [recipes, setRecipes] = useState<Recipe[] | null>(null);

  const getData = async (signal: AbortSignal) => {
    try {
      const res = await fetch(
        `https://api.spoonacular.com/recipes/random?number=10&tags=vegetarian,chicken&apiKey=a76824713af44b9196b97ffd944fb3eb`,
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
