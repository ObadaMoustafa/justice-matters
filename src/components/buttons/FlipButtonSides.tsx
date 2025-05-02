import { AnimatePresence, motion } from 'motion/react';
import React, { forwardRef, ReactElement, useState } from 'react';
import styled from 'styled-components';

const variants = {
  initRight: { opacity: 0, x: -60 },
  view: { opacity: 1, x: 0 },
  exitRight: { opacity: 0, x: 60 },
  initLeft: { opacity: 0, x: 60 },
  exitLeft: { opacity: 0, x: -60 },
};

const Link = styled(motion.a)`
  font-size: 1.5rem;
  overflow: hidden;
  padding: 10px 20px;
  cursor: pointer;
  overflow: hidden;
`;

// TS

type Props = {
  children: ReactElement;
  href?: string;
  className?: string;
  fn?: () => void;
  left?: boolean;
};
const FlipButtonSides = forwardRef<HTMLAnchorElement, Props>(
  ({ children, href, className, fn, left = false }, ref) => {
    const content = [children, children];

    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const handleHover = (): void => setCurrentIndex(1);
    const handleLeave = (): void => setCurrentIndex(0);
    return (
      <Link
        onMouseEnter={handleHover}
        onMouseLeave={handleLeave}
        href={href}
        rel="noopener noreferrer"
        onClick={fn}
        ref={ref}
        className={className}
      >
        <AnimatePresence mode="popLayout">
          <motion.div
            key={currentIndex}
            variants={variants}
            initial={left ? 'initLeft' : 'initRight'}
            animate="view"
            exit={left ? 'exitLeft' : 'exitRight'}
            transition={{ duration: 0.3 }}
          >
            {content[currentIndex]}
          </motion.div>
        </AnimatePresence>
      </Link>
    );
  }
);

FlipButtonSides.displayName = 'FlipButtonSides';
export default FlipButtonSides;
