import { forwardRef } from 'react';
import styled from 'styled-components';

const IconContainer = styled.div`
  width: 100px;
  img {
    width: 100%;
    object-fit: contain;
    display: block;
  }
`;
const Icon = forwardRef(({ image, className }, ref) => {
  //write code here

  return (
    <IconContainer className={className} ref={ref}>
      <img src={image} alt="icon" />
    </IconContainer>
  );
});

Icon.displayName = 'Icon';
export default Icon;
