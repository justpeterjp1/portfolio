import "../css/About.css";
import AboutImageCard from "./Image";


const About = () => {
  return (
    <section id="about" className="about-section ">
      <div className="card-wrapper">
        {/* Text Card */}
        <div className="card text-card animate-on-scroll">
          <div className="card-body">
            <h2 className="card-title">About Me</h2>
            <p className="card-text fade-in">
              I'm a developer passionate about building thoughtful, user-focused experiences. I love clean code, creative problem-solving, and collaborating on meaningful projects.
            </p>
            <p className="card-text fade-in delay">
              With experience in modern JavaScript frameworks, UI/UX principles, and agile development, I've worked on projects from concept to deployment — always focusing on delivering real value.
            </p>
            <div className="btn-group">
              <a href="/resume.pdf" download className="btn-cyan">Download Resume</a>
              <a href="#projects" className="btn-outline-cyan">View Projects</a>
            </div>
          </div>
        </div>

        {/* Image Card */}
        <div className="card image-card animate-on-scroll"> 
          <AboutImageCard />
        </div>
      </div>
    </section>
  );
};

export default About;
