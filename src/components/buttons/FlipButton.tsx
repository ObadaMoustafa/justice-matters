import styled from 'styled-components';
import { navHeight, textColor, titleColor } from '../../style';
import { motion } from 'motion/react';
import React, { ReactNode, useState } from 'react';
import { MotionVariants } from '@/types/global';

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

const variants: MotionVariants = {
  originalMouseIn: { y: -20, opacity: 0, display: 'none' },
  originalMouseOut: { y: 0, opacity: 1, display: 'flex' },
  secondaryMouseOut: { y: 20, opacity: 0, display: 'none' },
};

const duration: number = 0.09;
type Props = {
  children: ReactNode;
  fn: () => void;
  href?: string;
  width?: string;
};
function FlipButton({ children, fn, href, width }: Props) {
  // to animate children when hovering the parent
  const [isHover, setIsHover] = useState<boolean>(false);
  const handleMouseIn = (): void => {
    setIsHover(true);
  };
  const handleMouseOut = (): void => {
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

export default FlipButton;
