import {
  useScroll,
  motion,
  useMotionValueEvent,
  useSpring,
  AnimatePresence,
} from 'motion/react';
import styled from 'styled-components';
import { btnColor, textColor } from '../style';
import { useState } from 'react';

const GoTopContainer = styled(motion.div)`
  position: fixed;
  bottom: -15px;
  right: -15px;
  width: 100px;
  height: 100px;
  cursor: pointer;
  scale: 0.4;
  z-index: 500;

  &:hover .icon {
    transition: all 1s;
    fill: ${btnColor};
    opacity: 1;
  }

  .up-arrow {
    font-weight: 100;
    scale: 0.13;
    fill: ${textColor};
  }

  .icon {
    width: 80%;
    object-fit: contain;
    display: block;
    transform: rotate(90deg) translate(-93px, -10px);
    opacity: 1;
    transform-origin: center;
  }

  circle {
    stroke-dashoffset: 0;
    stroke-width: 5px;
    fill: none;
  }

  .bg {
    stroke: #fafafa;
    opacity: 0.3;
  }

  &,
  .indicator {
    stroke: #fafafa;
  }

  //^ Computer version
  @media only screen and (min-width: 800px) {
    bottom: 10px;
    right: 10px;
    scale: 0.7;

    .icon {
      opacity: 0.6;
    }
  }
`;

const showVariants = {
  init: { opacity: 0, scale: 0, rotate: -90 },
  show: { opacity: 1, scale: 1 },
};
function GoTop() {
  //write code here
  const { scrollYProgress, scrollY } = useScroll();
  const [showBtn, setShowBtn] = useState(scrollY > 100);

  const path = useSpring(scrollYProgress, {
    stiffness: 150,
    damping: 40,
    restDelta: 0.001,
  });

  useMotionValueEvent(scrollY, 'change', (latest) => {
    if (latest > 100) setShowBtn(true);
    else setShowBtn(false);
  });

  const goToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <AnimatePresence>
      {showBtn && (
        <GoTopContainer
          onClick={goToTop}
          variants={showVariants}
          initial="init"
          animate="show"
          exit="init"
          transition={{ duration: 0.8, type: 'spring' }}
        >
          <svg viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="45" pathLength="1" className="bg" />
            <motion.circle
              cx="50"
              cy="50"
              r="45"
              pathLength="1"
              className="indicator"
              style={{ pathLength: path }}
            />
          </svg>
          <img
            src="https://res.cloudinary.com/elsharbatly/image/upload/v1729610046/NEOX/Images/up-arrow_usox8x.png"
            className="icon"
            alt=""
          />
        </GoTopContainer>
      )}
    </AnimatePresence>
  );
}

export default GoTop;
