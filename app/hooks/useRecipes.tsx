import { API_KEY, BASE_URL } from "@/lib/constants";
import { useQuery } from "@tanstack/react-query";

interface QueryResponse {
  recipes: Recipe[];
}

const useRecipes = () => {
  const getData = () => {
    return fetch(
      `${BASE_URL}/recipes/random?number=10&tags=vegetarian,chicken&apiKey=${API_KEY}`
    ).then((res) => res.json());
  };

  const { data, isError, isLoading } = useQuery<QueryResponse>({
    queryKey: ["recipes"],
    queryFn: getData,
  });

  return { data, isError, isLoading };
};
export default useRecipes;
