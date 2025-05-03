import styled from 'styled-components';
import Section from './Section';
import { motion, useScroll, useSpring } from 'motion/react';
import React, { useContext, useEffect, useRef } from 'react';
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
  const pRef = useRef<HTMLParagraphElement>(null);
  const { isMobile } = useContext(WindowContext);

  const { scrollY } = useScroll();
  const x = useSpring(0, { stiffness: 100, damping: 30 });

  // move the text left or right during scrolling
  scrollY.on('change', (latest) => {
    const isDown: boolean = latest > (scrollY?.getPrevious() || 0);
    if (isDown) {
      if (isMobile) {
        x.set(x.get() - 30);
      } else {
        x.set(x.get() - 160);
      }
    } else {
      if (isMobile) {
        x.set(x.get() + 30);
      } else {
        x.set(x.get() + 160);
      }
    }
  });

  useEffect(() => {
    if (!pRef.current) return;
    const pWidth = pRef.current.offsetWidth;
    x.set(pWidth - innerWidth / 2);
  }, []);

  return (
    <StyledDivider>
      <motion.p ref={pRef} style={{ x }}>
        Justice Matters - Justice Matters - Justice Matters - Justice Matters
      </motion.p>
    </StyledDivider>
  );
}

export default Divider;
