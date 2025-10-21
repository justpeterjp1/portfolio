import "../css/Home.css";
import HeroText from "./HeroText";
import HtmlIcon from '../assets/logos/html5.svg?react';
import CssIcon from '../assets/logos/css.svg?react';
import JsIcon from '../assets/logos/javascript.svg?react';
import MongodbIcon from '../assets/logos/mongodb.svg?react';
import ExpressIcon from '../assets/logos/express.svg?react';
import ReactLogo from '../assets/logos/react.svg?react';
import TailwindIcon from '../assets/logos/tailwindcss.svg?react';
import NodejsIcon from '../assets/logos/nodedotjs.svg?react';
import PhpIcon from '../assets/logos/php.svg?react';
import PythonIcon from '../assets/logos/python.svg?react';
import GithubIcon from '../assets/logos/github.svg?react';

const techIcons = [
  { Component: HtmlIcon, alt: "HTML", color: "#e75026ff" },
  { Component: CssIcon, alt: "CSS", color: "#1572B6" },
  { Component: JsIcon, alt: "JavaScript", color: "#f7df1e" },
  { Component: MongodbIcon, alt: "MongoDB", color: "#47A248" },
  { Component: ExpressIcon, alt: "Express JS", color: "#000000" },
  { Component: ReactLogo, alt: "React", color: "#61dafb" },
  { Component: TailwindIcon, alt: "TailwindCSS", color: "#38bdf8" },
  { Component: NodejsIcon, alt: "Node JS", color: "#339933" },
  // { Component: PhpIcon, alt: "PHP", color: "#777bb4" },
  { Component: PythonIcon, alt: "Python", color: "#3776ab" },
  { Component: GithubIcon, alt: "GitHub", color: "#181717" },
];

const Home = () => {
  return (
    <div id=" home " className="hero-section section">
      <section id="home" className="hero-section">
        {/* Text Headings */}
        <h1 className="hero-name animate-on-scroll slide-in delay-1">HI! My name is Peter</h1>
        <HeroText />
        <h2 className="hero-verbs animate-on-scroll slide-in delay-3">And I speak a couple of languages, quite fluently. Here's my Tech stack</h2>
        

        {/* Tech Icons */}
        <div className="tech-grid slide-in animate-on-scroll delay-5">
          {techIcons.map((icon, index) => (
            <div
              className="tech-icon animate-on-scroll"
              style={{
                animationDelay: `${500 + index * 100}ms`, // start a bit later
                opacity: 0,
              }}
              key={index}
            >
              <icon.Component
                title={icon.alt}
                style={{
                  width: "50px",
                  height: "50px",
                  fill: icon.color,
                }}
              />
            </div>
          ))}
        </div>

        {/* Learn More Button */}
        <a href="#about" className="btn-outline-cyan slide-in animate-on-scroll delay-6">
          Learn more about me
        </a>
        <h2 className="blog-text animate-on-scroll slide-in delay-4">But that's just brief, You can check me out extensively on <a className="btn-blog" href="https://itsjustpeter.wordpress.com">My Blog</a></h2>
      </section>
    </div>
  );
};

export default Home;
