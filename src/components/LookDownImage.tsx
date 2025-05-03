// To be a reusable component, you need to change the bottom , left and right properties from where you gonna use it.
import React from 'react';
import styled from 'styled-components';
import Image from './media/Image';
import { navHeight } from '../style';

const LookDownImageElement = styled(Image)`
  width: 160px;
  position: absolute;
  z-index: 3;
  cursor: pointer;

  &:hover {
    opacity: 0.5;
  }

  //^ Tablet version
  @media only screen and (min-width: 450px) {
    width: 230px;
  }

  //^ Computer version
  @media only screen and (min-width: 800px) {
    width: 400px;
  }
`;

function scrollDown() {
  window.scrollTo(0, innerHeight - navHeight);
}

type Props = {
  src: string;
  alt: string;
  className?: string;
};
function LookDownImage({ src, alt, className }: Props) {
  //write code here

  return (
    <LookDownImageElement
      className={className}
      src={src}
      alt={alt}
      fn={scrollDown}
    />
  );
}

export default LookDownImage;
