import { useSpring } from 'framer-motion';
import { useCallback } from 'react';

interface BoopConfig {
  x?: number;
  y?: number;
  rotation?: number;
  scale?: number;
  timing?: number;
}

export const useBoop = ({
  x = 0,
  y = 0,
  rotation = 0,
  scale = 1,
  timing = 150,
}: BoopConfig = {}) => {
  const springX = useSpring(0, { stiffness: 300, damping: 10 });
  const springY = useSpring(0, { stiffness: 300, damping: 10 });
  const springRotation = useSpring(0, { stiffness: 300, damping: 10 });
  const springScale = useSpring(1, { stiffness: 300, damping: 10 });

  const trigger = useCallback(() => {
    springX.set(x);
    springY.set(y);
    springRotation.set(rotation);
    springScale.set(scale);

    setTimeout(() => {
      springX.set(0);
      springY.set(0);
      springRotation.set(0);
      springScale.set(1);
    }, timing);
  }, [x, y, rotation, scale, timing, springX, springY, springRotation, springScale]);

  const style = {
    x: springX,
    y: springY,
    rotate: springRotation,
    scale: springScale,
  };

  return { style, trigger };
};