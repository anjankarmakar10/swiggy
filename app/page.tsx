import CategoryList from "./components/CategoryList";
import DiscoverRecipes from "./components/DiscoverRecipes";
import Divider from "./components/Divider";
import Hero from "./components/Hero";
import PopularRecipes from "./components/PopularRecipes";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <CategoryList />
      <Divider />
      <PopularRecipes />
      <Divider />
      <DiscoverRecipes />
    </main>
  );
}
