import { motion } from 'motion/react';
import PropTypes from 'prop-types';
import { forwardRef } from 'react';
const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.04,
    },
  },
};

const child = {
  hidden: {
    opacity: 0,
    y: 20,
    scale: 0,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
  },
};

const PoppingText = forwardRef(({ text, className }, ref) => {
  const letters = Array.from(text);

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          variants={child}
          transition={{
            duration: 0.5,
            ease: 'easeInOut',
            repeat: Infinity,
            repeatType: 'loop',
            repeatDelay: 1,
          }}
        >
          {letter === ' ' ? '\u00A0' : letter}
        </motion.span>
      ))}
    </motion.div>
  );
});
PoppingText.displayName = 'PoppingText';
PoppingText.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
};
export default PoppingText;
