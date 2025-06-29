const navLinks = [
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "Testimonials",
    link: "#testimonials",
  },
];

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Quality Focus",
    desc: "Delivering high-quality results while maintaining attention to every detail.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Reliable Communication",
    desc: "Keeping you updated at every step to ensure transparency and clarity.",
  },
  {
    imgPath: "/images/time.png",
    title: "On-Time Delivery",
    desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
  },
];

const techStackIcons = [
  {
    name: "Interactive Developer",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "React Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Backend Developer",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Java Developer",
    modelPath: "/models/java.glb",
    scale: 1.3,
    rotation: [0, 0, 0],
  },
  {
    name: "Project Manager",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const testimonials = [
  {
    name: "Saket Anand",
    mentions: "@saketanand",
    review:
      "Anshul built our full-stack grocery store app (EasyFoods) from scratch with authentication, cart, admin dashboard, and real-time updates. The UI was sleek, and performance was flawless across devices.",
    imgPath: "/images/client1.png",
  },
  {
    name: "Rhea Kapoor",
    mentions: "@rhea.designs",
    review:
      "I collaborated with Anshul on a motion-heavy, Awwwards-style website. His integration of GSAP, Locomotive Scroll, and clean HTML/CSS was pixel-perfect and visually stunning.",
    imgPath: "/images/client4.png",
  },
  {
    name: "Sankalp Srivastava",
    mentions: "@devsankalp",
    review:
      "Anshul led the frontend and backend of our video calling web app. Real-time communication, language-switching, and peer-to-peer performance were all handled beautifully. A solid full-stack job.",
    imgPath: "/images/client3.png",
  },
  {
    name: "Simran Malhotra",
    mentions: "@simran.codes",
    review:
      "We needed a 3D portfolio section with model animations and interactive transitions. Anshul used Three.js and GSAP together like a pro. The experience feels dynamic and polished.",
    imgPath: "/images/client5.png",
  },
  {
    name: "Yash Dubey",
    mentions: "@yashdubey.dev",
    review:
      "For our internal dashboard, Anshul developed protected routes, JWT auth, and component-driven architecture in React. Code quality and delivery speed were both excellent.",
    imgPath: "/images/client3.png",
  },
  {
    name: "Tanya Khanna",
    mentions: "@tanya.uiux",
    review:
      "Anshul implemented our design handoff into a responsive layout using Tailwind and Framer Motion. Every animation matched the prototype, and mobile breakpoints were spot on.",
    imgPath: "/images/client6.png",
  },
];

const socialImgs = [
  {
    name: "insta",
    imgPath: "/images/insta.png",
  },
  {
    name: "fb",
    imgPath: "/images/fb.png",
  },
  {
    name: "x",
    imgPath: "/images/x.png",
  },
  {
    name: "linkedin",
    imgPath: "/images/linkedin.png",
  },
];

export {
  words,
  abilities,
  testimonials,
  socialImgs,
  techStackIcons,
  navLinks,
};
