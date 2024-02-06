import { API_KEY, BASE_URL } from "@/lib/constants";
import { useQuery } from "@tanstack/react-query";

interface QueryResponse {
  recipes: Recipe[];
}

interface QueryParams {
  isPopular: boolean;
}

const useRecipes = (params?: QueryParams) => {
  const getData = () => {
    return fetch(
      `${BASE_URL}/recipes/random?number=10&tags=vegetarian,chicken&apiKey=${API_KEY}`
    ).then((res) => res.json());
  };

  const { data, isError, isLoading } = useQuery<QueryResponse>({
    queryKey: ["recipes"],
    queryFn: getData,
  });

  if (params?.isPopular) {
    const recipes = data?.recipes?.filter((recipe) => recipe.veryHealthy);
    return { recipes, isError, isLoading };
  }

  return { data, isError, isLoading };
};
export default useRecipes;
