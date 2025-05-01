import React from 'react';
import styled from 'styled-components';
import Image from './media/Image';
import { motion } from 'motion/react';
import FadeTextByLetter from './text/FadeTextByLetter';

const DIV = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: black;
  color: white;
  display: flex;
  row-gap: 40px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px;
  text-align: center;
  font-size: 15pt;
`;

const GearPhoto = styled(motion.create(Image))`
  width: 50px;
`;

const gearVariants = {
  init: { opacity: 0, rotate: 0 },
  show: { opacity: 1, rotate: 360 },
};

// TS
type props = {
  fn?: () => void;
};
function HoldingWork({ fn }: props) {
  //write code here

  return (
    <DIV>
      <GearPhoto
        fn={fn}
        src="https://res.cloudinary.com/elsharbatly/image/upload/v1730110326/NEOX/Images/grey-gear_grwhkb.png"
        variants={gearVariants}
        animate="show"
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatDelay: 0,
          type: 'tween',
          repeatType: 'loop',
          ease: 'linear',
        }}
      />
      <FadeTextByLetter text="I stopped working on this project until further notice" />
    </DIV>
  );
}

export default HoldingWork;
