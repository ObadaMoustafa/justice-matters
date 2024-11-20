import { AnimatePresence, motion } from 'motion/react';
import { forwardRef, useState } from 'react';
import styled from 'styled-components';
import { titleColor } from '../../style';

const variants = {
  init: { opacity: 0, y: 100 },
  view: { opacity: 1, y: 0 },
  exit: { opacity: 0 },
};

const Link = styled(motion.a)`
  width: fit-content;
  font-size: 1.5rem;
  overflow: hidden;
  background-color: transparent;
  padding: 10px 20px;
  cursor: pointer;
  overflow: hidden;

  &:hover * {
    color: ${titleColor};
  }
`;

const FlipButton2 = forwardRef(({ children, href, className }, ref) => {
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
      ref={ref}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          className={className}
          variants={variants}
          initial="init"
          animate="view"
          exit="exit"
          transition={{ duration: 0.1 }}
        >
          {content[currentIndex]}
        </motion.div>
      </AnimatePresence>
    </Link>
  );
});
FlipButton2.displayName = 'FlipButton2';

const childrenValidation = (props, propName, componentName) => {
  const { children } = props;
  // children is required
  if (!children)
    return new Error(`At least one child of ${componentName} is required`);
  //children should be maximum 2
  if (children.length > 2)
    return new Error(`${componentName} should have at most 2 children`);

  return null;
};
FlipButton2.propTypes = {
  children: childrenValidation,
};
export default FlipButton2;
