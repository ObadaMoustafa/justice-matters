import { motion, useAnimation, useInView } from 'motion/react';
import styled from 'styled-components';
import { useEffect, useRef, useState } from 'react';
import { titleColor, titleFontSize } from '../../style';
import FadeTextByLetter from './FadeTextByLetter';

const TitleContainer = styled(motion.div)`
  width: fit-content;
  height: 40px;
  position: relative;
  overflow: hidden;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  transform-origin: top left;
  justify-content: center;
  align-items: center;
  gap: 20px;
  text-transform: uppercase;
  text-align: center;

  .text-border1,
  .text-border2 {
    background-color: white;
    height: 100%;
    width: 1px;
  }

  //^ Tablet version
  @media only screen and (min-width: 450px) {
    .text-border2 {
      display: none;
    }
    margin: 0;
    border-right: none;
    text-align: left;
  }

  //^ Computer version
  @media only screen and (min-width: 800px) {
  }
`;

const titleContainerVariants = {
  init: { height: 0 },
  show: { height: '40px' },
};

const StyledAnimatedTitle = styled(FadeTextByLetter)`
  color: ${titleColor};
  font-size: ${titleFontSize.mobile};
  font-weight: 700;

  //^ Tablet version
  @media only screen and (min-width: 450px) {
    font-size: ${titleFontSize.tablet};
  }

  //^ Computer version
  @media only screen and (min-width: 800px) {
    font-size: ${titleFontSize.pc};
  }
`;
function AnimatedTitle({ text, className, delay }) {
  const borderRef = useRef(null);
  const isInView = useInView(borderRef, { once: true });
  const animateBorder = useAnimation();

  useEffect(() => {
    if (isInView) {
      animateBorder.start('show');
    } else {
      animateBorder.start('init');
    }
  }, [isInView]);
  return (
    <TitleContainer
      ref={borderRef}
      className={className}
      variants={titleContainerVariants}
      initial="init"
      animate={animateBorder}
      transition={{ duration: 0.3 }}
    >
      <div className="text-border1"></div>
      <StyledAnimatedTitle text={text} inView delay={0.3} once />
      <div className="text-border2"></div>
    </TitleContainer>
  );
}

export default AnimatedTitle;
