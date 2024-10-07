import Loader from "./components/Loader";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Carousel from "./components/Carousel";
import ContactBanner from "./components/ContactBanner";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Loader />
      <Nav />
      <Hero />
      <Carousel />
      <ContactBanner />
      <Contact />
      <Footer />
    </main>
  );
}
