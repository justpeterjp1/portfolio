import { useRef } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ProjectDetails from './components/ProjectDetails';
import Footer from './components/Footer';
import './css/App.css'
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import useScrollSpy from './resources/IntersectionObserver';
import useAnimateOnScroll from './resources/animation';

const sectionIds = ['home', 'about', 'contact', 'projects'];

function App() {
  // 
   useAnimateOnScroll(); 
   
  //  
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);
   const { activeId, registerRef } = useScrollSpy(sectionIds);
useAnimateOnScroll();

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({behaviour: 'smooth'});
  };

  return (
   <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div className='app-wrapper'>
              <Navbar 
                onNavigate={{
                  home: () => scrollToSection(homeRef),
                  about: () => scrollToSection(aboutRef),
                  projects: () => scrollToSection(projectsRef),
                  contact: () => scrollToSection(contactRef)
                }} 
              />
              <div ref={homeRef}><Home /></div>
              <div ref={aboutRef}><About /></div>
              <div ref={projectsRef}><Projects /></div>
              <div ref={contactRef}><Contact /></div>
            </div>
          }
        />
        <Route path="/project/:id" element={<ProjectDetails />} />
      </Routes>
    </Router>
  
  );
};

export default App
