import PropTypes from 'prop-types';
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
const Image = forwardRef(({ src, alt, className, fn }, ref) => {
  //write code here

  return (
    <ImageContainer className={className} ref={ref} onClick={fn}>
      <img src={src} alt={alt} />
    </ImageContainer>
  );
});

Image.displayName = 'Image';
Image.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  className: PropTypes.string,
  fn: PropTypes.func,
};
export default Image;
