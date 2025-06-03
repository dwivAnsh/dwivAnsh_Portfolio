import LogoShowcase from "./section/LogoShowcase";
import LogoSection from "./section/LogoShowcase";
import Navbar from "./components/Navbar";
import Hero from "./section/Hero";
import ShowcaseSection from "./section/ShowcaseSection";
import FeatureCards from "./section/FeatureCards";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <ShowcaseSection />
      <LogoShowcase />
      <FeatureCards />
    </>
  );
}

export default App;
