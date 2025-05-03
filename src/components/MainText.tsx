import React, { forwardRef } from 'react';
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
type Props = {
  children: string;
  className?: string;
};
const MainText = forwardRef<HTMLParagraphElement, Props>(
  ({ children, className }, ref) => {
    //write code here

    return (
      <P ref={ref} className={className}>
        {children}
      </P>
    );
  }
);

MainText.displayName = 'MainText';
export default MainText;
