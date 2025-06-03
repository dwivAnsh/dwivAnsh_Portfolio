import AnimatedCounter from "../components/AnimatedCounter";
import Button from "../components/Button";
import HeroExperience from "../components/HeroModels/HeroExperience";
import { words } from "../constants";
import { useGSAP } from "@gsap/react";
import gsap from 'gsap';


const Hero = () => {
    useGSAP(() => {
        const tl = gsap.timeline();
        tl.from(".hero-text h1", {
            y: 70,
            opacity: 0,
            duration: 1,
            stagger: 0.2,
            ease: "power2.inOut",
            delay: 0.5  
        })
    })

  return (
    <section id="hero" className="relative overflow-hidden">
      <div className="absolute top-0 left-0 z-10">
        <img src="./images/bg.png" alt="background" />
      </div>

      <div className="hero-layout">
        {/* left hero content */}
        <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5">
          <div className="flex flex-col gap-7">
            <div className="hero-text">
              <h1>
                Shaping
                <span className="slide">
                  <span className="wrapper">
                    {words.map((word, idx) => (
                      <span
                        key={idx}
                        className="flex items-center md:gap-3 gap1 pb-2"
                      >
                        <img
                          src={word.imgPath}
                          alt={word.text}
                          className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50"
                        />
                        <span>{word.text}</span>
                      </span>
                    ))}
                  </span>
                </span>
              </h1>
              <h1>into Real Projects</h1>
              <h1>that Deliver Results</h1>
            </div>
            <p className="text-white-50 md:text-xl relative z-10 pointer-events-none">Hi, I'm Anshul, a developer based in India with passion for code.</p>
            <Button 
                className = "md:w-80 md:h-16 w-60 h-12"
                id = "button"
                text = "See my work"
            />
          </div>
        </header>
        {/* 3d hero content */}
        <figure>
            <div className="hero-3d-layout">
                <HeroExperience />
            </div>
        </figure>
      </div>
      <AnimatedCounter />
    </section>
  );
};

export default Hero;


// When we default export we import the component like this
// import Hero from "./section/Hero";