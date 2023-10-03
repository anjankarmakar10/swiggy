const getRecipeDetails = async (id: string) => {
  const response = await fetch(
    `https://api.spoonacular.com/recipes/${id}/information?includeNutrition=true&apiKey=a76824713af44b9196b97ffd944fb3eb`
  );

  const recipe: RecipeDetails = await response.json();

  return recipe;
};
export default getRecipeDetails;
