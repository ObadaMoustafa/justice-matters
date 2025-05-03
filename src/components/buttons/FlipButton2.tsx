import { AnimatePresence, motion } from 'motion/react';
import React, { forwardRef, ReactNode, useState } from 'react';
import styled from 'styled-components';
import { titleColor } from '../../style';

const variants = {
  init: { opacity: 0, y: 100 },
  view: { opacity: 1, y: 0 },
};

const variants2 = {
  init: { opacity: 0, y: -100 },
  view: { opacity: 1, y: 0 },
};
const Link = styled(motion.a)`
  width: fit-content;
  height: 50px;
  font-size: 1.5rem;
  overflow: hidden;
  background-color: transparent;
  padding: 0 20px;
  cursor: pointer;
  overflow: hidden;
  gap: 30px;

  &:hover * {
    color: ${titleColor};
  }
`;

type Props = {
  children: ReactNode;
  href?: string;
  className?: string;
};
const FlipButton2 = forwardRef<HTMLAnchorElement, Props>(
  ({ children, href, className }, ref) => {
    const content = [children, children];

    const [isHover, setIsHover] = useState(false);
    const handleHover = () => setIsHover(true);
    const handleLeave = () => setIsHover(false);
    return (
      <Link
        onMouseEnter={handleHover}
        onMouseLeave={handleLeave}
        href={href}
        rel="noopener noreferrer"
        ref={ref}
      >
        <AnimatePresence mode="wait">
          {!isHover ? (
            <motion.div
              key={0}
              className={className}
              variants={variants2}
              initial="init"
              animate="view"
              transition={{ duration: 0.25 }}
            >
              {content[0]}
            </motion.div>
          ) : (
            <motion.div
              key={1}
              className={className}
              variants={variants}
              initial="init"
              animate="view"
              transition={{ duration: 0.25 }}
            >
              {content[1]}
            </motion.div>
          )}
        </AnimatePresence>
      </Link>
    );
  }
);

FlipButton2.displayName = 'FlipButton2';

export default FlipButton2;
