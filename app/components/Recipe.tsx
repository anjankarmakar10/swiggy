import Image from "next/image";
import { GiHealthNormal } from "react-icons/gi";

interface Props {
  recipe: Recipe;
}

const Recipe = ({ recipe }: Props) => {
  return (
    <article className="flex flex-col gap-2 transition-all hover:scale-95 cursor-pointer w-full ">
      <div className="overflow-hidden relative isolate rounded-2xl">
        <Image
          src={recipe.image}
          alt={recipe.title}
          width={0}
          height={0}
          sizes="100vw"
          style={{
            width: "100%",
            height: "220px",
            objectFit: "cover",
          }}
        />
        <div className="absolute bottom-0 left-0 right-0 z-10 bg-gradient-card h-20 flex  items-end">
          <p
            title={`Health Score ${recipe.healthScore}`}
            className={`font-bold mt-1 text-white pl-2 pb-2 flex gap-2 items-center `}
          >
            <div
              className={`p-1 rounded-full border-2 ${
                recipe.healthScore > 80
                  ? "border-lime-500 text-lime-500"
                  : recipe.healthScore < 50
                  ? "border-rose-500 text-rose-500"
                  : "border-amber-500 text-amber-500 "
              }`}
            >
              <GiHealthNormal />
            </div>
            <span
              className={`mt-1 text-xl ${
                recipe.healthScore > 80
                  ? "text-lime-500"
                  : recipe.healthScore < 50
                  ? "text-rose-500"
                  : "text-amber-500"
              }`}
            >
              {recipe.healthScore} %
            </span>
          </p>
        </div>
      </div>
      <div className="p-2">
        <h3 className="text-lg font-bold line-clamp-1">{recipe.title}</h3>

        <p className="text-[#02060d91] font-normal leading-snug">
          {recipe.diets.join(", ")}
        </p>
      </div>
    </article>
  );
};
export default Recipe;
