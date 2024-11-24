import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { contentFontSize, textColor } from '../style';

const P = styled.p`
  font-size: ${contentFontSize.mobile};
  color: ${textColor};
  text-align: center;

  //^ Tablet version
  @media only screen and (min-width: 450px) {
    font-size: ${contentFontSize.pc};
    text-align: left;
  }

  //^ Computer version
  @media only screen and (min-width: 800px) {
    line-height: 45px;
  }
`;
const MainText = React.forwardRef(({ children, className }, ref) => {
  //write code here

  return (
    <P ref={ref} className={className}>
      {children}
    </P>
  );
});

MainText.displayName = 'MainText';
MainText.propTypes = {
  children: PropTypes.string,
};
export default MainText;
