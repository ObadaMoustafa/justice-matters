import styled from 'styled-components';
import Section from './Section';
import { motion, useScroll, useSpring } from 'motion/react';
import { useContext, useEffect, useRef } from 'react';
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
  const { isMobile } = useContext(WindowContext);

  const { scrollY } = useScroll();
  const x = useSpring(0, { stiffness: 100, damping: 30 });

  // move the text left or right during scrolling
  scrollY.on('change', (latest) => {
    const isDown = latest > scrollY.getPrevious();
    if (isDown) {
      if (isMobile) {
        x.set(x.get() - 70);
      } else {
        x.set(x.get() - 260);
      }
    } else {
      if (isMobile) {
        x.set(x.get() + 70);
      } else {
        x.set(x.get() + 260);
      }
    }
  });

  useEffect(() => {
    const pWidth = pRef.current.offsetWidth;
    x.set(pWidth);
  }, []);

  useEffect(() => {}, [x]);
  return (
    <StyledDivider>
      <motion.p ref={pRef} style={{ x }}>
        NEOX - employment agency service
      </motion.p>
    </StyledDivider>
  );
}

export default Divider;
