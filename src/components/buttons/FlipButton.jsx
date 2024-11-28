import styled from 'styled-components';
import { navHeight, textColor, titleColor } from '../../style';
import { motion } from 'motion/react';
import { useState } from 'react';
import PropTypes from 'prop-types';

const TheButton = styled(motion.a)`
  height: ${navHeight - 15}px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  span {
    cursor: pointer;
    display: flex;
  }
`;

const variants = {
  originalMouseIn: { y: -20, opacity: 0, display: 'none' },
  originalMouseOut: { y: 0, opacity: 1, display: 'flex' },
  secondaryMouseOut: { y: 20, opacity: 0, display: 'none' },
};

const duration = 0.09;

function FlipButton({ children, fn, href, width }) {
  // to animate children when hovering the parent
  const [isHover, setIsHover] = useState(false);
  const handleMouseIn = () => {
    setIsHover(true);
  };
  const handleMouseOut = () => {
    setIsHover(false);
  };

  return (
    <TheButton
      href={href}
      onMouseEnter={handleMouseIn}
      onMouseLeave={handleMouseOut}
      style={{ width }}
      onClick={fn}
    >
      {/* TEXT */}
      <motion.span
        variants={variants}
        initial="originalMouseOut"
        animate={isHover ? 'originalMouseIn' : 'originalMouseOut'}
        transition={{
          duration,
          ease: 'easeInOut',
          spring: 200,
          stiffness: 450,
          damping: 200,
        }}
        exit={{ opacity: 0, transition: { duration: 2 } }}
        style={{ color: textColor }}
      >
        {children}
      </motion.span>
      <motion.span
        variants={variants}
        initial="secondaryMouseOut"
        animate={isHover ? 'originalMouseOut' : 'secondaryMouseOut'}
        transition={{
          duration,
        }}
        exit={{ opacity: 0, transition: { duration: 2 } }}
        style={{ color: titleColor }}
      >
        {children}
      </motion.span>
    </TheButton>
  );
}

FlipButton.prototype = {
  children: PropTypes.string,
  fn: PropTypes.func,
  href: PropTypes.string,
  width: PropTypes.number,
};
export default FlipButton;
