import { motion } from 'motion/react';
import styled from 'styled-components';
import { navMenuZIndex, textColor, titleColor } from '../../style';
import PropTypes from 'prop-types';

const lineWidth = 35;
const lineHeight = 1;
const containerHeight = 20;

const NavElement = styled.div`
  flex-grow: 1;
  z-index: ${navMenuZIndex + 1};
`;

const MenuIconContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  height: ${containerHeight}px;
  cursor: pointer;
  width: 50px;
`;

const Line = styled(motion.div)`
  width: ${lineWidth}px;
  height: ${lineHeight}px;
  background-color: ${textColor};
`;

const nonMiddleLinesAnim = {
  isOpenAnimeUp: {
    width: lineWidth,
    rotate: 45,
    y: containerHeight / 2 - lineHeight / 2, // this formula to keep the lines crossing in the middle and no matter containerHeight is
    transition: { duration: 0.4 },
  },
  isOpenAnimeBottom: {
    width: lineWidth,
    rotate: -45,
    y: -(containerHeight / 2 - lineHeight / 2), // this formula to keep the lines crossing in the middle and no matter containerHeight is
    transition: { duration: 0.4 },
  },
  isCloseAnimeUp: {
    width: [lineWidth, lineWidth * 0.7, lineWidth],
    transition: { duration: 4, repeat: Infinity },
  },
  isCloseAnimeBottom: {
    width: [lineWidth, lineWidth * 0.7, lineWidth],
    transition: { duration: 4, repeat: Infinity },
  },
};

const middleLineAnime = {
  isOpenAnime: { opacity: 0, transition: { duration: 0.4 } },
  isCloseAnime: {
    width: [
      lineWidth * 0.7,
      lineWidth,
      lineWidth * 0.7,
      lineWidth,
      lineWidth * 0.7,
    ],
    transition: { duration: 4, repeat: Infinity },
  },
};
function BurgerMenuIcon({ isOpen, fn }) {
  //write code here

  return (
    <NavElement>
      <MenuIconContainer onClick={fn}>
        {/* First Line */}
        <Line
          animate={isOpen ? 'isOpenAnimeUp' : 'isCloseAnimeUp'}
          variants={nonMiddleLinesAnim}
          transition={{ duration: 1 }}
        />

        {/* Second Line */}
        <Line
          style={{ backgroundColor: titleColor }}
          variants={middleLineAnime}
          animate={isOpen ? 'isOpenAnime' : 'isCloseAnime'}
          transition={{ duration: 1 }}
        />
        {/* Third Line */}
        <Line
          animate={isOpen ? 'isOpenAnimeBottom' : 'isCloseAnimeBottom'}
          variants={nonMiddleLinesAnim}
          transition={{ duration: 1 }}
        />
      </MenuIconContainer>
    </NavElement>
  );
}

BurgerMenuIcon.prototype = {
  isOpen: PropTypes.bool,
  fn: PropTypes.func,
};
export default BurgerMenuIcon;
