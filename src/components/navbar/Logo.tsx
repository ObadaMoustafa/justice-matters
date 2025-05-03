import styled from 'styled-components';
import { navHeight, navMenuZIndex, titleColor } from '../../style';
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from 'motion/react';
import Image from '../media/Image';
import { Link } from 'react-router-dom';
import PoppingText from '../text/PoppingText';
import React, { useState } from 'react';

const LogoContainer = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  color: ${titleColor};

  h1 {
    font-weight: 500;
    letter-spacing: 3px;
  }
`;

const LogoEl = styled(motion.create(Image))`
  height: ${navHeight * 1.5}px;
  z-index: ${navMenuZIndex + 1};
  flex-grow: 2;
  margin-top: 50px;

  img {
    display: block;
    height: 100%;
    margin: auto;
  }
`;

const ThePoppingText = styled(motion.create(PoppingText))`
  flex-grow: 1;
  font-size: 1.5rem;
  font-weight: 700;
  color: white;

  //^ Computer version
  @media only screen and (min-width: 800px) {
    font-size: 2.5rem;
  }
`;

const logoVariants = {
  init: {
    scale: 0,
  },
  show: {
    scale: 1,
  },
};
function Logo() {
  //write code here
  const [showText, setShowText] = useState(false);
  const { scrollY } = useScroll();

  // if I scroll more than 100px I want to show the text
  useMotionValueEvent(scrollY, 'change', (latest) => {
    if (latest > 100) setShowText(true);
    else setShowText(false);
  });

  return (
    <LogoContainer to="/">
      <AnimatePresence mode="wait">
        {showText ? (
          <ThePoppingText
            text={'Justice Matters'}
            variants={logoVariants}
            initial="init"
            animate="show"
            exit="init"
          />
        ) : (
          <>
            <LogoEl
              src="https://res.cloudinary.com/elsharbatly/image/upload/v1739102424/justice-matters/logo_gjc5to.png"
              alt="logo"
              variants={logoVariants}
              initial="init"
              animate="show"
              exit="init"
            />
          </>
        )}
      </AnimatePresence>
    </LogoContainer>
  );
}

export default Logo;
