import LogoShowcase from "./section/LogoShowcase";
import Navbar from "./components/Navbar";
import Hero from "./section/Hero";
import ShowcaseSection from "./section/ShowcaseSection";
import FeatureCards from "./section/FeatureCards";
import Experience from "./section/Experience";
import TechStack from "./section/TechStack";
import Testimonials from "./section/Testimonals";
import Contact from "./section/Contact";
import Footer from "./section/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <ShowcaseSection />
      <LogoShowcase />
      <FeatureCards />
      <Experience />
      <TechStack />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
