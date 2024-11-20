import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import FlipButtonRight from '../buttons/FlipButtonRight';
import { AnimatePresence, motion } from 'motion/react';
import Image from './Image';
import styled from 'styled-components';
import { imgBorderRadius } from '../../style';

const SliderContainer = styled.div`
  width: 500px;
  aspect-ratio: 1/1.2;
  margin: 20px auto;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const MainSliderImage = styled(motion.create(Image))`
  width: 90%;
  height: 90%;
  position: absolute;
  bottom: 0;
  left: 0;
  border-radius: ${imgBorderRadius}px;
`;
const SecondarySliderImage = styled(motion.create(Image))`
  width: 90%;
  height: 90%;
  opacity: 0.2;
  position: absolute;
  top: 0;
  right: 0;
  border-radius: ${imgBorderRadius}px;
`;

const PrevButton = styled(motion.create(FlipButtonRight))`
  z-index: 5;
  background-color: #ffffff48;
  border-radius: 50%;
  width: 20%;
  aspect-ratio: 1/1;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: -15%;
  opacity: 0.2;
`;
const NextButton = styled(motion.create(FlipButtonRight))`
  z-index: 5;
  background-color: #ffffff48;
  border-radius: 50%;
  width: 20%;
  aspect-ratio: 1/1;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: -15%;
  opacity: 0.2;
`;

const mainVariants = {
  init: { opacity: 0, y: -60, x: 20 },
  view: { opacity: 1, y: 0, x: 0 },
  exit: { opacity: 0, y: 60, x: -20 },
  initPrev: { opacity: 0, y: 60, x: -20 },
  exitPrev: { opacity: 0, y: -60, x: 20 },
};

const secondaryVariants = {
  init: { opacity: 0 },
  view: { opacity: 0.2 },
  exit: { opacity: 0 },
};

const PhotoSlider = React.forwardRef(function ({ images, className }, ref) {
  //write code here
  const [currentIndex, setCurrentIndex] = useState(0);
  const [secondaryIndex, setSecondaryIndex] = useState(1);
  const [isNext, setIsNext] = useState(false);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const handleNextPhoto = () => {
    setIsNext(true);
    if (currentIndex === images.length - 1) {
      setCurrentIndex(0);
      return;
    }
    setCurrentIndex((prev) => prev + 1);
  };
  const handlePrevPhoto = () => {
    setIsNext(false);
    if (currentIndex === 0) {
      setCurrentIndex(images.length - 1);
      return;
    }
    setCurrentIndex((prev) => prev - 1);
  };

  useEffect(() => {
    if (currentIndex === images.length - 1) {
      setSecondaryIndex(0);
    } else setSecondaryIndex(currentIndex + 1);
  }, [currentIndex]);

  // track touch for touch screens
  const handleTouchStart = (e) => {
    // initial both with the same value to let the subtraction equal to zero
    touchStartX.current = e.targetTouches[0].clientX;
    touchEndX.current = e.targetTouches[0].clientX;
  };
  const handleTouchMove = (e) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };
  const handleTouchEnd = () => {
    // check if the user swiped left or right
    if (touchStartX.current - touchEndX.current > 50) {
      setIsNext(true);
      handleNextPhoto();
    } else if (touchStartX.current - touchEndX.current < -50) {
      setIsNext(false);
      handlePrevPhoto();
    }

    // reset touch is important
    touchStartX.current = 0;
    touchEndX.current = 0;
  };

  return (
    <SliderContainer
      className={className}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <AnimatePresence mode="popLayout">
        <SecondarySliderImage
          key={secondaryIndex + 1}
          src={images[secondaryIndex]}
          alt="work photo"
          variants={secondaryVariants}
          initial="init"
          animate="view"
          exit="exit"
          transition={{ duration: 0.4 }}
        />
        <MainSliderImage
          key={currentIndex}
          src={images[currentIndex]}
          alt="work photo"
          variants={mainVariants}
          initial={isNext ? 'init' : 'initPrev'}
          animate="view"
          exit={isNext ? 'exit' : 'exitPrev'}
          transition={{ duration: 0.4 }}
        />
      </AnimatePresence>

      {/* next and previous buttons */}
      <NextButton
        fn={handleNextPhoto}
        whileTap={{ scale: 0.9 }}
        whileHover={{ opacity: 1 }}
      >
        <i className="fa-solid fa-angles-left"></i>
      </NextButton>
      <PrevButton
        left
        fn={handlePrevPhoto}
        whileTap={{ scale: 0.9 }}
        whileHover={{ opacity: 1 }}
      >
        <i className="fa-solid fa-angles-right"></i>
      </PrevButton>
    </SliderContainer>
  );
});

PhotoSlider.displayName = 'PhotoSlider';

PhotoSlider.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default PhotoSlider;
