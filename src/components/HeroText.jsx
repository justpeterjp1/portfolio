import { useState, useEffect, useRef } from "react";
import "../css/Zzz.css";

export default function HeroText() {
  const roles = [
    "Frontend Developer",
    "Backend Developer",
    "Full Stack Developer",
    "Software Engineer",
  ];
  
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const textRef = useRef(null);

  useEffect(() => {
    // Change text until we reach the last one
    if (index >= roles.length - 1) return;

    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setIndex((prev) => prev + 1);
        setFade(true);
      }, 400); // Wait for fade-out before fade-in
    }, 2500);

    return () => clearInterval(interval);
  }, [index, roles.length]);

  return (
    <h2 className="hero-heading animate-on-scroll slide-in delay-2">
      I'm a
      <span
        ref={textRef}
        className={`role-text ${fade ? "fade-in" : "fade-out"}`}
      >
        {roles[index]}
      </span>
    </h2>
  );
}
