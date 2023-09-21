import CategoryList from "./components/CategoryList";
import Divider from "./components/Divider";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <main className="">
      <Hero />

      <CategoryList />
      <Divider />
    </main>
  );
}
