import React from 'react';
import PropTypes from 'prop-types';

const PhotoSlider = React.forwardRef(function ({ images, className }, ref) {
  //write code here

  return <>{/* elements here */}</>;
});

PhotoSlider.displayName = 'PhotoSlider';

PhotoSlider.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default PhotoSlider;
