import styled from 'styled-components';
import Section from './Section';
import { motion } from 'motion/react';
import { useContext, useEffect, useRef, useState } from 'react';
import { WindowContext } from '../contexts/WindowContext';

const StyledDivider = styled(Section)`
  padding: 0;
  height: 150px;
  background-color: #31383d;
  margin: 30px 0;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  white-space: nowrap;
  overflow: hidden;

  p {
    width: fit-content;
    color: rgba(255, 255, 255, 0);
    -webkit-text-stroke: 1px white;
    font-size: 80px;
    font-weight: 900;
    text-transform: uppercase;
    transform-origin: left;
  }
`;

function Divider() {
  //write code here
  const pRef = useRef(null);
  const [textVariants, setTextVariants] = useState({
    init: { x: '1707px' },
    show: { x: '-100vw' },
  });

  useEffect(() => {
    const pWidth = pRef.current.offsetWidth;
    setTextVariants({
      init: { x: `${pWidth + 2} px` },
      show: { x: '-100vw' },
    });
  }, []);
  return (
    <StyledDivider>
      <motion.p
        ref={pRef}
        variants={textVariants}
        initial="init"
        animate="show"
        transition={{
          duration: 25,
          repeat: Infinity,
          repeatType: 'loop',
          type: 'tween',
        }}
      >
        NEOX - employment agency service
      </motion.p>
    </StyledDivider>
  );
}

export default Divider;
