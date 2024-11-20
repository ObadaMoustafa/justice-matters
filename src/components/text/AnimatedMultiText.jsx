import { useState, useEffect } from 'react';
import { AnimatePresence } from 'motion/react';
import FadeTextByLetter from './FadeTextByLetter';

const AnimatedMultiText = ({ className, textArr }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === textArr.length - 1 ? 0 : prevIndex + 1
      );
    }, 7000); // Change sentence every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <AnimatePresence mode="wait">
        <FadeTextByLetter
          className={className}
          key={currentIndex}
          text={textArr[currentIndex]}
        />
      </AnimatePresence>
    </div>
  );
};

export default AnimatedMultiText;
