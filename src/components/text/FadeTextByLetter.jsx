import { motion } from 'motion/react';
import { forwardRef } from 'react';

const FadeTextByLetter = forwardRef(
  ({ text, className, delay, inView }, ref) => {
    //write code here
    const letters = Array.from(text);

    const variants = {
      init: { opacity: 0 },
      show: {
        opacity: 1,
        transition: { staggerChildren: 0.01 },
      },

      exit: { opacity: 0, x: -250, scale: 0, y: 100 },
    };

    return (
      <motion.div
        ref={ref}
        variants={variants}
        initial="init"
        animate={inView ? false : 'show'}
        exit="exit"
        className={className}
        transition={{ delay: delay || false }}
        whileInView={inView ? 'show' : false}
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
