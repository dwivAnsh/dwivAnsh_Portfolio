import LogoShowcase from "./section/LogoShowcase";
import Navbar from "./components/Navbar";
import Hero from "./section/Hero";
import ShowcaseSection from "./section/ShowcaseSection";
import FeatureCards from "./section/FeatureCards";
import Experience from "./section/Experience";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <ShowcaseSection />
      <LogoShowcase />
      <FeatureCards />
      <Experience />
    </>
  );
}

export default App;
