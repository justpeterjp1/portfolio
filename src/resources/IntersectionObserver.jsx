// IntersectionObserver.jsx
import { useEffect, useRef, useState } from 'react';

export default function useScrollSpy(sectionIds, options = {}) {
  const [activeId, setActiveId] = useState(null);
  const sectionRefs = useRef({});

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.6,
      ...options,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const id = entry.target.id;
        if (entry.isIntersecting) {
          setActiveId(id);
        }
      });
    }, observerOptions);

    sectionIds.forEach(id => {
      const el = sectionRefs.current[id];
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sectionIds.join(',')]); // join to track changes

  const registerRef = (id) => (el) => {
    if (el) sectionRefs.current[id] = el;
  };

  return { activeId, registerRef };
}
