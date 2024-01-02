import Image from "next/image";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
interface Props {
  recipe: Recipe;
}

const RecipeCard = ({ recipe }: Props) => {
  return (
    <Card>
      <CardHeader className="p-4 ">
        <div className="overflow-hidden  rounded-2xl">
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
        </div>
        <CardTitle className="line-clamp-1">{recipe.title}</CardTitle>
        <CardDescription>
          <p className={`font-bold flex gap-2 items-center `}>
            Helth Score:
            <span
              className={` ${
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
        </CardDescription>
      </CardHeader>
      <CardContent className="p-4 pt-0">
        <p className="line-clamp-2">{recipe.diets.join(", ")}</p>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Link className="w-full" href={`/recipe/${recipe.id}`}>
          <Button className="w-full">Veiw Recipe</Button>
        </Link>
      </CardFooter>
    </Card>
  );
};
export default RecipeCard;
