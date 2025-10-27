export interface SmoothScrollOptions {
  duration?: number;
  easing?: (t: number) => number;
  offset?: number;
}


export const easingFunctions = {
  linear: (t: number): number => t,
  easeInOut: (t: number): number => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t,
  easeOut: (t: number): number => t * (2 - t),
  easeIn: (t: number): number => t * t,
};


export const smoothScrollTo = (
  target: string | Element | number,
  options: SmoothScrollOptions = {}
): Promise<void> => {
  const {
    duration = 800,
    easing = easingFunctions.easeInOut,
    offset = 0,
  } = options;

  return new Promise((resolve) => {
    let targetY: number;


    if (typeof target === 'number') {
      targetY = target;
    } else if (typeof target === 'string') {
      const element = document.querySelector(target);
      if (!element) {
        console.warn(`Element with selector "${target}" not found`);
        resolve();
        return;
      }
      targetY = element.getBoundingClientRect().top + window.pageYOffset - offset;
    } else if (target instanceof Element) {
      targetY = target.getBoundingClientRect().top + window.pageYOffset - offset;
    } else {
      console.warn('Invalid target provided to smoothScrollTo');
      resolve();
      return;
    }

    const startY = window.pageYOffset;
    const difference = targetY - startY;
    const startTime = performance.now();


    const supportsNativeSmooth = 'scrollBehavior' in document.documentElement.style;


    if (supportsNativeSmooth && easing === easingFunctions.linear) {
      window.scrollTo({
        top: targetY,
        behavior: 'smooth',
      });

      setTimeout(() => resolve(), duration);
      return;
    }


    const animateScroll = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = easing(progress);

      const currentY = startY + (difference * easedProgress);
      window.scrollTo(0, currentY);

      if (progress < 1) {
        requestAnimationFrame(animateScroll);
      } else {
        resolve();
      }
    };

    requestAnimationFrame(animateScroll);
  });
};


export const scrollToSection = (sectionId: string, offset: number = 80): Promise<void> => {
  return smoothScrollTo(`#${sectionId}`, {
    duration: 500, // Reduced from 800ms to 500ms for faster navigation
    easing: easingFunctions.easeOut, // Changed to easeOut for snappier feel
    offset,
  });
};


export const scrollToTop = (options: SmoothScrollOptions = {}): Promise<void> => {
  return smoothScrollTo(0, {
    duration: 600,
    easing: easingFunctions.easeOut,
    ...options,
  });
};