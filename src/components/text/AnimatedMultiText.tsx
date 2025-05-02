import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'motion/react';
import FadeTextByLetter from './FadeTextByLetter';
import { $SpecialObject } from 'i18next/typescript/helpers';

type Props = {
  className?: string;
  textArr: string[];
};
const AnimatedMultiText = ({ className, textArr }: Props) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    const interval_id: number = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === textArr.length - 1 ? 0 : prevIndex + 1
      );
    }, 7000); // Change sentence every 3 seconds
    return () => clearInterval(interval_id);
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
