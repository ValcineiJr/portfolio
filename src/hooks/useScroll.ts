import { useEffect, useState } from 'react';

export function useScroll() {
  const [scrollY, setScrollY] = useState(0);

  function reveal() {
    const reveals = document.querySelectorAll(`.reveal`);
    setScrollY(window.scrollY);

    for (let i = 0; i < reveals.length; i++) {
      const windowHeight = window.innerHeight;
      const elementTop = reveals[i].getBoundingClientRect().top;
      const elementVisible = 200;

      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add(`active`);
      } else {
        reveals[i].classList.remove(`active`);
      }
    }
  }

  useEffect(() => {
    window.addEventListener(`scroll`, reveal);
    return () => window.removeEventListener(`scroll`, reveal);
  });

  return { scrollY };
}
