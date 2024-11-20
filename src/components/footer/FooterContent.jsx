import { motion } from 'motion/react';
const variants = {
  init: { opacity: 0, y: 100 },
  view: { opacity: 1, y: 0 },
};

function FooterContent({ children }) {
  //write code here

  return <motion.div variants={variants}>{children}</motion.div>;
}

export default FooterContent;
