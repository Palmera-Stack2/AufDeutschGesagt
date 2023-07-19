import About from "../components/sections/About";
import Blog from "../components/sections/Blog";
import Podcasts from "../components/sections/Podcasts";
import Rating from "../components/sections/Rating";
import Comments from "../components/sections/Comments";
import Footer from "../components/sections/Footer";
import Hero from "../components/sections/Hero";
import Navbar from "../components/sections/Navbar";
import Support from "../components/sections/Support";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Podcasts />
      <Blog />
      <Rating />
      <Comments />
      <Support />
      <Footer />

    </>
  );
}
