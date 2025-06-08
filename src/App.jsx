import LogoShowcase from "./section/LogoShowcase";
import Navbar from "./components/Navbar";
import Hero from "./section/Hero";
import ShowcaseSection from "./section/ShowcaseSection";
import FeatureCards from "./section/FeatureCards";
import Experience from "./section/Experience";
import TechStack from "./section/TechStack";
import Testimonials from "./section/Testimonals";

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
    </>
  );
}

export default App;
