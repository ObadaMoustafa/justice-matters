import React, { useEffect, useMemo, useRef } from 'react';
import PropTypes from 'prop-types';
import MainText from '../MainText';
import { motion, useAnimation, useInView } from 'motion/react';
import styled from 'styled-components';

const P = styled(motion(MainText))`
  > span {
    overflow: hidden;
  }

  span {
    display: inline-block;
  }
`;

const PVariants = {
  init: {},
  show: {
    transition: { staggerChildren: 0.2, when: 'beforeChildren' },
  },
};

const SVariants = {
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
function AnimateByLine({ text = '', className }) {
  //write code here
  const pRef = useRef(null);
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
          <motion.span variants={SVariants}>{line}.</motion.span>
        </span>
      ))}
    </P>
  );
}

AnimateByLine.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
};
export default AnimateByLine;
