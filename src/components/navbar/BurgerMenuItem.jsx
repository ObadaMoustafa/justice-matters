import { AnimatePresence, motion } from 'motion/react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
const Item = styled(motion.create(Link))`
  font-size: 30pt;
  color: white;
  text-transform: uppercase;
`;

function BurgerMenuItem({ text, href, delay, fn, isOpen }) {
  //write code here
  const itemVariants = {
    init: {
      opacity: 0,
      x: 20,
      y: 20,
      transition: { duration: delay * 0.5, type: 'spring' },
    },
    open: { opacity: 1, x: 0, y: 0, transition: { duration: delay, delay } },
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
