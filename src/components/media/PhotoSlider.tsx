import React, { TouchEvent, useEffect, useRef, useState } from 'react';
import FlipButtonSides from '../buttons/FlipButtonSides';
import { AnimatePresence, motion } from 'motion/react';
import Image from './Image';
import styled from 'styled-components';
import { bgColor, btnColor, imgBorderRadius } from '../../style';

const SliderContainer = styled.div`
  width: 100%;
  min-height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  // white border
  /* border: 1px solid white; */

  > * {
    /* border: 1px solid yellow; */
  }

  //^ Tablet version
  @media only screen and (min-width: 450px) {
  }
`;

const ImageContainer = styled.div`
  position: relative;
  width: 90%;
  aspect-ratio: 2/2.9;
  max-height: 100%;

  //^ Tablet version
  @media only screen and (min-width: 450px) {
    max-width: 60%;
  }
`;

const commonSliderImageStyle = styled(Image)`
  position: absolute;
  height: calc(100% - 20px);
  width: calc(100% - 20px);
  border-top-right-radius: ${imgBorderRadius.mobile * 2}px;
  border-bottom-left-radius: ${imgBorderRadius.mobile * 2}px;

  //^ Tablet version
  @media only screen and (min-width: 450px) {
    border-top-right-radius: ${imgBorderRadius.tablet * 2}px;
    border-bottom-left-radius: ${imgBorderRadius.tablet * 2}px;
  }
`;

const MainSliderImage = styled(motion.create(commonSliderImageStyle))`
  bottom: 0;
  left: 0;
`;

const SecondarySliderImage = styled(motion.create(commonSliderImageStyle))`
  opacity: 0.2;
  top: 0;
  right: 0;
`;

const CommonNextPrevStyle = styled(FlipButtonSides)`
  z-index: 5;
  background-color: ${btnColor};
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 1;

  /* icon style */
  color: ${bgColor};

  //^ Computer version
  @media only screen and (min-width: 800px) {
    opacity: 0.1;
    height: 400px;
  }
`;

const PrevButton = styled(motion.create(CommonNextPrevStyle))`
  border-top-left-radius: ${imgBorderRadius.mobile}px;
  border-bottom-left-radius: ${imgBorderRadius.mobile}px;

  //^ Tablet version
  @media only screen and (min-width: 450px) {
    border-top-left-radius: ${imgBorderRadius.tablet}px;
    border-bottom-left-radius: ${imgBorderRadius.tablet}px;
  }
`;
const NextButton = styled(motion.create(CommonNextPrevStyle))`
  border-top-right-radius: ${imgBorderRadius.mobile}px;
  border-bottom-right-radius: ${imgBorderRadius.mobile}px;

  //^ Tablet version
  @media only screen and (min-width: 450px) {
    border-top-right-radius: ${imgBorderRadius.tablet}px;
    border-bottom-right-radius: ${imgBorderRadius.tablet}px;
  }
`;

const mainVariants = {
  init: { opacity: 0, y: -30, x: 30 },
  view: { opacity: 1, y: 0, x: 0 },
  exit: { opacity: 0, y: 30, x: -30 },
  initPrev: { opacity: 0, y: 30, x: -30 },
  exitPrev: { opacity: 0, y: -30, x: 30 },
};

const secondaryVariants = {
  init: { opacity: 0 },
  view: { opacity: 0.2 },
  exit: { opacity: 0 },
};

// TS
type Props = {
  images: string[];
  className?: string;
};
// ! important: the images size should be 15 * 22.5 cm
const PhotoSlider = React.forwardRef<HTMLDivElement, Props>(function (
  { images, className },
  ref
) {
  //write code here
  const [currentIndex, setCurrentIndex] = useState(0);
  const [secondaryIndex, setSecondaryIndex] = useState(1);
  const [isNext, setIsNext] = useState(false);
  const touchStartX = useRef<number>(0);
  const touchEndX = useRef<number>(0);
  const handleNextPhoto = (): void => {
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
  const handleTouchStart = (e: TouchEvent<HTMLElement>) => {
    // initial both with the same value to let the subtraction equal to zero
    touchStartX.current = e.targetTouches[0].clientX;
    touchEndX.current = e.targetTouches[0].clientX;
  };
  const handleTouchMove = (e: TouchEvent<HTMLElement>) => {
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
      ref={ref}
      className={className}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <PrevButton
        fn={handleNextPhoto}
        whileTap={{ scale: 0.9 }}
        whileHover={{ opacity: 1 }}
        left
      >
        <i className="fa-solid fa-angles-left"></i>
      </PrevButton>

      <ImageContainer>
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
      </ImageContainer>

      <NextButton
        fn={handlePrevPhoto}
        whileTap={{ scale: 0.9 }}
        whileHover={{ opacity: 1 }}
      >
        <i className="fa-solid fa-angles-right"></i>
      </NextButton>
    </SliderContainer>
  );
});

PhotoSlider.displayName = 'PhotoSlider';
export default PhotoSlider;
