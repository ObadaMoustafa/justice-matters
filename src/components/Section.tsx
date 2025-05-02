import styled from 'styled-components';
import { navHeight, xlPadding, xsPadding } from '../style';
import React, { forwardRef, ReactElement, ReactNode } from 'react';

const StyledContainer = styled.section`
  padding: ${navHeight}px ${xsPadding}px 0 ${xsPadding}px;
  width: 100%;

  //^ Tablet version
  @media only screen and (min-width: 450px) {
  }
  //^ Computer version
  @media only screen and (min-width: 800px) {
    padding-left: ${xlPadding}px;
    padding-right: ${xlPadding}px;
  }
`;

type Props = {
  children: ReactNode;
  className?: string;
};
const Section = forwardRef<HTMLElement, Props>(function (
  { children, className },
  ref
) {
  //write code here

  return (
    <StyledContainer ref={ref} className={className}>
      {children}
    </StyledContainer>
  );
});

Section.displayName = 'Section';
export default Section;
