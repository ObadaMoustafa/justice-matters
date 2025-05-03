import { MotionVariants } from '@/types/global';
import i18next from 'i18next';
import mergeRefs from 'merge-refs';
import { motion, useAnimate } from 'motion/react';
import React, { forwardRef, useEffect, useRef } from 'react';

// TS
type Props = {
  text: string;
  className?: string;
  delay?: number;
  inView?: boolean;
  once?: boolean;
  duration?: number;
};

const FadeTextByLetter = forwardRef(
  ({ text, className, delay, inView, once, duration = 0.5 }: Props, ref) => {
    //write code here
    const skipUseEffect = useRef<boolean>(true);
    const letters: string[] = Array.from(text);
    const variants: MotionVariants = {
      init: { opacity: 0 },
      show: {
        opacity: 1,
        transition: {
          staggerChildren: duration / letters.length,
          delayChildren: delay,
        },
      },

      exit: { opacity: 0, x: -250, scale: 0, y: 100 },
    };

    const [scope, animate] = useAnimate();

    // retrigger animation when language changed
    useEffect(() => {
      if (skipUseEffect.current) {
        skipUseEffect.current = false;
        return;
      }
      animate('span', { opacity: 1 });
    }, [i18next.language]);

    return (
      <motion.div
        ref={mergeRefs(ref, scope)}
        variants={variants}
        initial="init"
        animate={inView ? false : 'show'}
        exit="exit"
        className={className}
        whileInView={inView ? 'show' : undefined}
        viewport={{ once: once ? true : undefined }}
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
