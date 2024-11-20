import { motion } from 'motion/react';
import { forwardRef } from 'react';

const FadeTextByLetter = forwardRef(
  ({ text, className, delay, inView }, ref) => {
    //write code here
    const letters = Array.from(text);

    const variants = {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: { staggerChildren: 0.05 },
      },

      exit: { opacity: 0, x: -250, scale: 0, y: 100 },
    };

    return (
      <motion.div
        ref={ref}
        variants={variants}
        initial="hidden"
        animate={inView ? false : 'visible'}
        exit="exit"
        className={className}
        transition={{ delay: delay || false }}
        whileInView={inView}
      >
        {letters.map((letter, index) => (
          <motion.span key={index} variants={variants}>
            {letter}
          </motion.span>
        ))}
      </motion.div>
    );
  }
);

FadeTextByLetter.displayName = 'Animated Text';
export default FadeTextByLetter;
