import { motion } from 'motion/react';
import PropTypes from 'prop-types';
const variants = {
  init: { opacity: 0, y: 100 },
  view: { opacity: 1, y: 0 },
};

function FooterContent({ children }) {
  //write code here

  return <motion.div variants={variants}>{children}</motion.div>;
}

FooterContent.propTypes = {
  children: PropTypes.node,
};
export default FooterContent;
