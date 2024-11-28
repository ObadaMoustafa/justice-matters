import styled from 'styled-components';
import { navHeight, xlPadding, xsPadding } from '../style';
import { forwardRef } from 'react';
import PropTypes from 'prop-types';

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
const Section = forwardRef(function ({ children, className }, ref) {
  //write code here

  return (
    <StyledContainer ref={ref} className={className}>
      {children}
    </StyledContainer>
  );
});

Section.displayName = 'Section';
Section.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};
export default Section;
