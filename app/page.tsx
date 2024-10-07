import Loader from "./components/Loader";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Carousel from "./components/Carousel";

export default function Home() {
  return (
    <main className="overflow-hidden">
      {/* <Loader /> */}
      <Nav />
      <Hero />
      <Carousel />
      <About />
    </main>
  );
}
