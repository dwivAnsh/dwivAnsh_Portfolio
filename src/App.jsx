
import Navbar from "./components/Navbar";
import Hero from "./section/Hero";
import ShowcaseSection from "./section/ShowcaseSection";
import FeatureCards from "./section/FeatureCards";
import TechStack from "./section/TechStack";
import Testimonials from "./section/Testimonals";
import Contact from "./section/Contact";
import Footer from "./section/Footer";

const App = () => {

  return (
    <div id="main-container" data-scroll-container>
      <Navbar />
      <Hero />
      <ShowcaseSection />
      <FeatureCards />
      <TechStack />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;