import getRecipeDetails from "@/app/lib/getRecipeDetails";

interface Params {
  params: {
    id: string;
  };
}

const RecipeDetails = async ({ params: { id } }: Params) => {
  const recipe = await getRecipeDetails(id);

  return (
    <section className="bg-gray-100">
      <div className="container mx-auto p-4 md:p-6">
        <div className="bg-white p-4 md:p-6 rounded-lg shadow-lg">
          <h1 className="text-2xl font-bold mb-4 ">{recipe.title}</h1>

          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1">
              <img
                className="w-full my-4 rounded-lg shadow"
                src={recipe.image}
                alt={recipe.title}
              />
            </div>
            <div className="flex-1 pt-4">
              <div dangerouslySetInnerHTML={{ __html: recipe.summary }}></div>
              <div className="flex py-2 justify-evenly flex-wrap">
                <div className=" flex flex-col  bg-white  w-fit p-4 items-center justify-center gap-1">
                  <img
                    src={`https://spoonacular.com/application/frontend/images/badges/cheap.svg`}
                    className="rounded-xl object-cover h-10 w-10"
                  />
                  <p className="text-sm mb-2 font-medium ">
                    ${recipe.pricePerServing} per serving
                  </p>
                </div>

                <div className=" flex flex-col  bg-white  w-fit p-4 items-center justify-center gap-1">
                  <img
                    src={`https://spoonacular.com/application/frontend/images/badges/fast.svg`}
                    className="rounded-xl object-cover h-10 w-10"
                  />
                  <p className="text-sm mb-2 font-medium ">
                    Ready in {recipe.readyInMinutes} minutes
                  </p>
                </div>

                <div className=" flex flex-col  bg-white  w-fit p-4 items-center justify-center gap-1">
                  <img
                    src={`https://spoonacular.com/application/frontend/images/badges/popular.svg`}
                    className="rounded-xl object-cover h-10 w-10"
                  />
                  <p className="text-sm mb-2 font-medium ">
                    {recipe.aggregateLikes} likes
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex gap-4">
            {recipe.cuisines.map((item, i) => (
              <div
                key={i}
                className=" text-white px-4 py-2 rounded-lg bg-gray-800 w-fit"
              >
                {item}
              </div>
            ))}
          </div>

          <h2 className="text-xl font-semibold mb-2 mt-4">Ingredients</h2>
          <ul className="mb-4 flex flex-wrap items-center justify-center ">
            {recipe.extendedIngredients?.map((ingredient) => (
              <div className="rounded-xl overflow-hidden flex flex-col  bg-white cursor-pointer max-w-[200px]">
                <div className="p-2 ">
                  <img
                    src={`https://spoonacular.com/cdn/ingredients_250x250/${ingredient.image}`}
                    className="rounded-xl object-cover w-full h-full"
                  />
                </div>

                <div className=" pl-3 p-3 text-text1 flex flex-col justify-center">
                  <p className="text-sm mb-2 font-medium text-center">
                    {ingredient.original}
                  </p>
                </div>
              </div>
            ))}
          </ul>

          <h2 className="text-xl font-semibold mb-2">Instructions</h2>
          <ol className="list-decimal list-inside mb-6">
            {recipe?.analyzedInstructions[0].steps.map((instruction) => (
              <li className="mb-2">{instruction.step}</li>
            ))}
          </ol>

          <p className="text-gray-700 mb-4">
            Serve the recipe with your favorite frosting or enjoy it plain!
          </p>
        </div>
      </div>
    </section>
  );
};

export default RecipeDetails;
