import styled from 'styled-components';
import { footerTextColor } from '../../style';
import PropTypes from 'prop-types';
import React from 'react';

const StyledFooterTitle = styled.h4`
  color: ${footerTextColor};
  font-weight: 700;
  margin-bottom: 5px;
  font-size: 15pt;
`;
type Props = {
  text: string;
};
function FooterTitle({ text }: Props) {
  //write code here

  return <StyledFooterTitle>{text}</StyledFooterTitle>;
}

FooterTitle.propTypes = {
  text: PropTypes.string,
};
export default FooterTitle;
