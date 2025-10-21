// useAnimateOnScroll.js
import { useEffect } from 'react';

export default function useAnimateOnScroll() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries, observerInstance) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observerInstance.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });

    // Observe current and future elements
    const observeElements = () => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      elements.forEach(el => {
        if (!el.classList.contains('visible')) observer.observe(el);
      });
    };

    // Initial run
    observeElements();

    // Watch DOM for changes (like after navigation)
    const mutationObserver = new MutationObserver(() => observeElements());
    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, []);
}
