import { motion } from 'motion/react';
import styled from 'styled-components';
import { footerTextColor } from '../../style';
import PropTypes from 'prop-types';

const StyledFooterTitle = styled.h4`
  color: ${footerTextColor};
  font-weight: 700;
  margin-bottom: 5px;
  font-size: 15pt;
`;

function FooterTitle({ text }) {
  //write code here

  return <StyledFooterTitle>{text}</StyledFooterTitle>;
}

FooterTitle.propTypes = {
  text: PropTypes.string,
};
export default FooterTitle;
