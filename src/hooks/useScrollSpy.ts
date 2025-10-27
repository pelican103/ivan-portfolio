import { useState, useEffect } from 'react';

export interface ScrollSpyOptions {
  offset?: number;
  throttleMs?: number;
  rootMargin?: string;
}

export const useScrollSpy = (
  sectionIds: string[],
  options: ScrollSpyOptions = {}
): string => {
  const { offset = 100 } = options;
  const [activeSection, setActiveSection] = useState<string>(sectionIds[0] || '');

  useEffect(() => {
    if (!sectionIds.length || typeof window === 'undefined') return;

    const handleScroll = () => {
      const scrollPosition = window.scrollY + offset;
      let currentSection = sectionIds[0];
      
      for (const sectionId of sectionIds) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop } = element;
          if (scrollPosition >= offsetTop) {
            currentSection = sectionId;
          }
        }
      }
      
      setActiveSection(currentSection);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [sectionIds, offset]);

  return activeSection;
};

export const useNavigationScrollSpy = (sectionIds: string[]): string => {
  return useScrollSpy(sectionIds, { offset: 80 });
};

export default useScrollSpy;