import React from 'react';
import { forwardRef } from 'react';
import styled from 'styled-components';
const ImageContainer = styled.div`
  overflow: hidden;
  img {
    display: block;
    width: 100%;
    max-height: 100%;
    object-fit: cover;
  }
`;

type Props = {
  src: string;
  alt: string;
  className: string;
  fn: () => void;
};
const Image = forwardRef<HTMLDivElement, Props>(
  ({ src, alt, className, fn }, ref) => {
    //write code here

    return (
      <ImageContainer className={className} ref={ref} onClick={fn}>
        <img src={src} alt={alt} />
      </ImageContainer>
    );
  }
);

Image.displayName = 'Image';
export default Image;
