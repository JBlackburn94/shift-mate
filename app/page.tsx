import Hero from "./components/Hero";
import Loader from "./components/Loader";
import Nav from "./components/Nav";
import Reviews from "./components/Reviews";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Loader />
      <Nav />
      <Hero />
      <Reviews />
    </main>
  );
}
