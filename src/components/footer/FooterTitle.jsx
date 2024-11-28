import { motion } from 'motion/react';
import styled from 'styled-components';
import { footerTextColor } from '../../style';
import PropTypes from 'prop-types';

const StyledFooterTitle = styled(motion.h4)`
  color: ${footerTextColor};
  font-weight: 700;
  margin-bottom: 5px;
  font-size: 15pt;
`;

const variants = {
  init: { opacity: 0, x: -100 },
  view: { opacity: 1, x: 0 },
};
function FooterTitle({ text }) {
  //write code here

  return <StyledFooterTitle variants={variants}>{text}</StyledFooterTitle>;
}

FooterTitle.propTypes = {
  text: PropTypes.string,
};
export default FooterTitle;
