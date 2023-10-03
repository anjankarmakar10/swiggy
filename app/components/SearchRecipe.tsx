interface Props {
  recipe: SearchRecipe;
}

const SearchRecipe = ({ recipe }: Props) => {
  return (
    <div className="rounded-xl overflow-hidden flex flex-col shadow hover:shadow-md w-full  bg-white cursor-pointer ">
      <div className="lg:flex flex p-2">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="rounded-xl object-cover w-full h-56"
        />
      </div>
      <div className="pl-3 p-3 text-text1 flex flex-col justify-center">
        <p className="text-base mb-2 font-bold truncate">{recipe.title}</p>
      </div>
    </div>
  );
};
export default SearchRecipe;
