import React, { useEffect, useMemo, useRef } from 'react';
import MainText from '../MainText';
import { motion, useAnimation, useInView } from 'motion/react';
import styled from 'styled-components';
import { MotionVariants } from '@/types/global';

const P = styled(motion(MainText))`
  > span {
    overflow: hidden;
  }

  span {
    display: inline-block;
  }
`;

const PVariants: MotionVariants = {
  init: {},
  show: {
    transition: { staggerChildren: 0.2, when: 'beforeChildren' },
  },
};

const SVariants: MotionVariants = {
  init: {
    opacity: 0,
    y: 100,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

type Props = {
  text: string;
  className?: string;
};

function AnimateByLine({ text, className }: Props) {
  //write code here
  const pRef = useRef<HTMLParagraphElement>(null);
  const isPInView = useInView(pRef);
  const animateP = useAnimation();
  const lines = useMemo(() => text.split('.'), [text]);

  useEffect(() => {
    if (isPInView) animateP.start('show');
    else animateP.start('init');
  }, [isPInView]);

  return (
    <P
      ref={pRef}
      variants={PVariants}
      className={className}
      initial="init"
      animate={animateP}
    >
      {lines.map((line, i) => (
        <span key={i}>
          <motion.span variants={SVariants}>{line}. &nbsp; </motion.span>
        </span>
      ))}
    </P>
  );
}

export default AnimateByLine;
