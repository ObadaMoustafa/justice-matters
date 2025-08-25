import { titleColor } from '../../style';
import { MotionVariants } from '@/types/global';
import { AnimatePresence, motion } from 'motion/react';
import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Item = styled(motion.create(Link))`
  font-size: 18pt;
  color: white;
  text-transform: uppercase;
  text-align: center;

  // Tablet version
  @media only screen and (min-width: 450px) {
    font-size: 20pt;
  }
  // Computer version
  @media only screen and (min-width: 800px) {
    font-size: 25pt;
  }
`;

type Props = {
  text: string;
  href?: string;
  delay: number;
  fn?: () => void;
  isOpen: boolean;
};
function BurgerMenuItem({ text, href, delay, fn, isOpen }: Props) {
  //write code here
  const itemVariants: MotionVariants = {
    init: {
      opacity: 0,
      x: 20,
      y: 20,
      transition: { duration: delay * 0.5, type: 'spring' },
    },
    open: { opacity: 1, x: 0, y: 0, transition: { duration: delay, delay } },
    hover: { color: titleColor },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <Item
          variants={itemVariants}
          initial="init"
          animate="open"
          exit="init"
          to={href}
          onClick={fn}
          whileHover="hover"
        >
          {text}
        </Item>
      )}
    </AnimatePresence>
  );
}

BurgerMenuItem.prototype = {
  text: PropTypes.string,
  href: PropTypes.string,
  delay: PropTypes.number,
  fn: PropTypes.func,
  isOpen: PropTypes.bool,
};
export default BurgerMenuItem;
