import React from 'react';
import { MotionVariants } from '@/types/global';
import { motion } from 'motion/react';
import styled from 'styled-components';

const DividerContainer = styled(motion.div)`
  overflow: hidden;
  margin: 15px 30px;
  transform-origin: center;

  hr {
    border-color: grey;
  }
`;

const variants: MotionVariants = {
  init: { scaleX: 0 },
  view: { scaleX: 1, transition: { duration: 0.5 } },
};
function LineDivider() {
  //write code here

  return (
    <DividerContainer variants={variants} initial="init" whileInView="view">
      <hr />
    </DividerContainer>
  );
}

export default LineDivider;
