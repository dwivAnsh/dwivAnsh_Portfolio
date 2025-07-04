import React, { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const ShowcaseSection = () => {
  const sectionRef = useRef(null);
  const project1Ref = useRef(null);
  const project2Ref = useRef(null);
  const project3Ref = useRef(null);

  useGSAP(() => {
    const projects = [
      //mujhe wo actual DOM element dedo jisko ref={ProjectRef} diya gaya tha.
      project1Ref.current,
      project2Ref.current,
      project3Ref.current,
    ];

    projects.forEach((project, idx) => {
      gsap.from(project, {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power2.inOut",
        delay: idx * 0.2,
        scrollTrigger: {
          trigger: project,
          start: "top 80%",
        },
      });
    });

    gsap.from(sectionRef.current, {
      opacity: 0,
      duration: 1.5,
      ease: "power2.inOut",
      delay: 0.5,
    });
  }, []);

  return (
    <div id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
          {/* Left */}
          <div className="first-project-wrapper" ref={project1Ref}>
            <div className="image-wrapper cursor-pointer">
              <img
                src="./images/project1.png"
                alt="project-1"
                onClick={() => {
                  window.open("https://siyansh.onrender.com/", "_blank");
                }}
              />
            </div>
            <div className="text-content">
              <h2>
                SiyAnsh – A Secure, Real-Time Video Chat App
              </h2>
              <p className="text-white-50 md:text-xl">
                Built with React, Node.js & Stream API for seamless video calls, authentication & global state sync.
              </p>
            </div>
          </div>
          {/* Right */}
          <div className="project-list-wrapper overflow-hidden">
            <div className="project" ref={project2Ref}>
              <div className="image-wrapper bg-[#FFEFDB] cursor-pointer">
                <img
                  src="/images/project2.png"
                  alt="Library Management Platform"
                  onClick={() => {
                    window.open(
                      "https://sundown-studio-beryl.vercel.app/",
                      "_blank"
                    );
                  }}
                />
              </div>
              <h2>Sundown Studio – AWWWARDS Website</h2>
            </div>
            <div className="project" ref={project3Ref}>
              <div className="image-wrapper bg-[#FFE7EB]">
                <img
                  src="/images/project3.png"
                  alt="YC Directory App"
                />
              </div>
              <h2>EasyFoods – FullStack Grocery App</h2>
            </div>
          </div>
        </div>
        <div className="showcaselayout mt-20">
          {/* Left */}
          <div className="project-list-wrapper overflow-hidden">
            <div className="project" ref={project2Ref}>
              <div className="image-wrapper bg-[#FFEFDB] cursor-pointer">
                <img
                  src="/images/project5.png"
                  alt="Library Management Platform"
                  onClick={() => {
                    window.open("https://lazerev.vercel.app/", "_blank");
                  }}
                />
              </div>
              <h2>Lazarev – Design Agency Website</h2>
            </div>

            <div className="project" ref={project3Ref}>
              <div className="image-wrapper bg-[#FFE7EB] cursor-pointer">
                <img
                  src="/images/project6.png"
                  alt="YC Directory App"
                  onClick={() => {
                    window.open("https://gta-delhi.vercel.app/", "_blank");
                  }}
                />
              </div>
              <h2>GTA Delhi – A Themed Web Experience</h2>
            </div>
          </div>
          {/* Right */}
          <div className="first-project-wrapper" ref={project1Ref}>
            <div className="image-wrapper cursor-pointer">
              <img
                src="./images/project4.png"
                alt="project-1"
                onClick={() => {
                  window.open(
                    "https://zajno-three-eight.vercel.app/",
                    "_blank"
                  );
                }}
              />
            </div>
            <div className="text-content">
              <h2>
                Zajno – Inspired Shader Visuals Project
              </h2>
              <p className="text-white-50 md:text-xl">
                Crafted immersive shader-based visuals using Three.js and custom GLSL shaders.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowcaseSection;

{
  /*
    Jab tumhare paas common class ho (e.g. .project)
→ Toh useRef ki zarurat nahi hai
→ Tum directly GSAP class selector ke through animate kar sakte ho
    
    */
}
