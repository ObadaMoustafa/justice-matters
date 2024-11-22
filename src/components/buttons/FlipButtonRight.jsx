import { AnimatePresence, motion } from 'motion/react';
import { forwardRef, useState } from 'react';
import styled from 'styled-components';
import { titleColor } from '../../style';
import PropTypes from 'prop-types';

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

const FlipButtonRight = forwardRef(
  ({ children, href, className, fn, left = false }, ref) => {
    const content = [children, children];

    const [currentIndex, setCurrentIndex] = useState(0);
    const handleHover = () => setCurrentIndex(1);
    const handleLeave = () => setCurrentIndex(0);
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

FlipButtonRight.displayName = 'FlipButtonRight';

const childrenValidation = (props, propName, componentName) => {
  const { children } = props;
  // children is required
  if (!children)
    return new Error(`At least one child of ${componentName} is required`);
  //children should be maximum 2
  else if (children.length > 2)
    return new Error(
      `${componentName} should have at most 2 children, instead you have ${children.length}`
    );

  return null;
};

FlipButtonRight.propTypes = {
  children: childrenValidation,
  left: PropTypes.bool,
};
export default FlipButtonRight;
