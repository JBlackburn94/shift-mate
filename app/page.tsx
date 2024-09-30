import Hero from "./components/Hero";
import Loader from "./components/Loader";
import Nav from "./components/Nav";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Loader />
      <Nav />
      <Hero />
    </main>
  );
}
