import img1 from '../assets/Images/project4.png';
import img2 from '../assets/Images/Project3.png';
import img3 from '../assets/Images/project2.png';
import img4 from '../assets/Images/project1.png';
import img5 from '../assets/Images/project5.png';



const projectsData = [
  {
    id: 1,
    title: "TaskNest",
    img: img1,
    desc: "A modern task management web app with real-time updates and collaborative features.",
    details: `TaskNest is a productivity platform that lets users organize, prioritize, and collaborate on tasks. Built with React, it features smooth animations and modular components for scalability.`,
    tools: ["React", "CSS3", "Tailwind", "Mongodb"],
    demo: "#",
    github: "#",
    designProcess: `The project began with wireframing and user flow planning to ensure intuitive navigation. Components were structured in a modular way using React and Tailwind CSS to maintain consistency and reusability.`,
    challenges: `Implementing real-time updates without a backend was challenging, so mock APIs were used to simulate user collaboration. Styling responsiveness across various screen sizes also required careful tuning.`
  },
  {
    id: 2,
    title: "DocuConvert",
    img: img2,
    desc: "A lightweight document converter that transforms files between PDF, DOCX, and TXT formats.",
    details: `DocuConvert simplifies file management by allowing you to convert and download between multiple document formats. Future updates include backend processing with Node.js.`,
    tools: ["Javascript", "Bootstrap", "HTML5", "Firebase", "NodeJS", "Express"],
    demo: "https://docuconverter.netlify.app",
    github: "https://github.com/justpeterjp1/learn-auth",
    designProcess: `Designed with simplicity in mind, the interface was sketched to minimize user actions. Each conversion option was arranged for quick access and consistent color schemes to guide user flow. A simple 
    login function was also added via Firebase`,
    challenges: `Managing file conversions in-browser was limited by file APIs, making it tricky to ensure accuracy and performance. Future iterations will integrate a backend for smoother file handling.`
  },
  {
    id: 3,
    title: "A4 Furnitures",
    img: img3,
    desc: "A sleek static site showcasing A4 Furnitures’ catalogue with a minimal UI and smooth animations.",
    details: `A fully responsive product showcase website with clean design, subtle motion, and optimized performance.`,
    tools: ["HTML", "CSS", "JavaScript", "Express"],
    demo: "https://a4furnitures.vercel.app/",
    github: "https://github.com/justpeterjp1/a4furnitures",
    designProcess: `The design process focused on creating a visually balanced layout using a grid system. Animations were introduced subtly to enhance user engagement without compromising load speed. Google 
    Authentication was used to take simple logins and a PayStack test API for payments was used as well`,
    challenges: `Ensuring cross-browser compatibility and maintaining high-quality image optimization while keeping the site lightweight posed challenges. Adjustments were made through iterative testing.`
  },
  {
    id: 4,
    title: "Assembly Game",
    img: img4,
    desc: "A fun logic-based browser game built in JavaScript to test your assembly and problem-solving skills.",
    details: `The Assembly Game challenges users to build logical instructions and sequences. Designed for fun learning and retro vibes.`,
    tools: ["React", "HTML"],
    demo: "https://assembly-olive.vercel.app/",
    github: "https://github.com/justpeterjp1/create-react-app",
    designProcess: `The project started with designing a retro-style grid and color palette. Game logic was structured to ensure progressive difficulty using event-driven state updates.`,
    challenges: `Managing game state and sideEffects and ensuring real-time updates without glitches was complex. Debugging logic loops and optimizing canvas rendering took several iterations to smooth out.`
  },
  {
  id: 5,
  title: "Movie Compass",
  img: img5,
  desc: "A dynamic movie tracking app that lets users discover, save, and manage their favorite films effortlessly.",
  details: `Movie Compass is an intuitive React-based web app that allows users to search, track, and organize movies they’ve watched or plan to watch. It features responsive design, API integration, and local state management for persistence.`,
  tools: ["React", "JavaScript", "CSS3"],
  demo: "https://movie-compass-qsr3s4mfc-peters-projects-6ae517bb.vercel.app",
  github: "https://github.com/justpeterjp1/movie-tracker",
  designProcess: `The design focused on creating a clean, card-based layout to showcase movie posters and essential details. The app’s flow was structured for smooth navigation between search, details, and favorites sections.`,
  challenges: `Integrating external movie APIs and managing asynchronous requests while maintaining fast, fluid UI updates presented challenges. Ensuring state consistency and error handling during API failures also required refinement.`
}

];

export default projectsData;
