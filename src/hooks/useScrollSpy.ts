import { useState, useEffect, useCallback } from 'react';

export interface ScrollSpyOptions {
  offset?: number;
  throttleMs?: number;
  rootMargin?: string;
}

export const useScrollSpy = (
  sectionIds: string[],
  options: ScrollSpyOptions = {}
): string => {
  const { offset = 100, throttleMs = 16 } = options; // Reduced throttle for smoother updates
  const [activeSection, setActiveSection] = useState<string>(sectionIds[0] || '');

  const handleScroll = useCallback(() => {
    if (!sectionIds.length || typeof window === 'undefined') return;

    const scrollPosition = window.scrollY + offset;
    let currentSection = sectionIds[0];
    
    // Iterate through sections to find the active one
    for (let i = 0; i < sectionIds.length; i++) {
      const sectionId = sectionIds[i];
      const element = document.getElementById(sectionId);
      if (element) {
        const { offsetTop, offsetHeight } = element;
        // Check if we're within this section's bounds
        if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
          currentSection = sectionId;
          break;
        }
        // If we're past this section but before the next, this is still active
        if (scrollPosition >= offsetTop) {
          currentSection = sectionId;
        }
      }
    }
    
    setActiveSection(currentSection);
  }, [sectionIds, offset]);

  useEffect(() => {
    if (!sectionIds.length || typeof window === 'undefined') return;

    let timeoutId: NodeJS.Timeout;
    
    const throttledHandleScroll = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(handleScroll, throttleMs);
    };

    // Initial call
    handleScroll();
    
    window.addEventListener('scroll', throttledHandleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', throttledHandleScroll);
      clearTimeout(timeoutId);
    };
  }, [handleScroll, throttleMs]);

  return activeSection;
};

export const useNavigationScrollSpy = (sectionIds: string[]): string => {
  return useScrollSpy(sectionIds, { offset: 80, throttleMs: 10 }); // Faster updates for navigation
};

export default useScrollSpy;