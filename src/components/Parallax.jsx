import { motion } from 'motion/react';
import styled from 'styled-components';

const ParallaxContainer = styled(motion.div)`
  position: relative;
  width: 100%;
  height: 100vh;
  background-repeat: no-repeat;
  background-position: center;
  background-attachment: fixed;
  background-size: cover;
  margin: 0 auto;
`;

//? Animations' Variants
const parallaxVariants = {
  init: { width: 0, transformOrigin: 'center' },
  show: { width: '100%', transition: { duration: 0.8, delay: 1.4 } },
};

function Parallax({ children, backgroundSrc, className }) {
  // write code here

  return (
    <ParallaxContainer
      className={className}
      variants={parallaxVariants}
      initial="init"
      animate="show"
      style={{ backgroundImage: `url(${backgroundSrc})` }}
    >
      <div className="dark-layer photo-dark-layer"></div>
      {children}
    </ParallaxContainer>
  );
}

export default Parallax;
