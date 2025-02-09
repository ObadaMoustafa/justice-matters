import PropTypes from 'prop-types';
import GoTop from './GoTop';
import Loader from './Loader';
import styled from 'styled-components';
import ScrollDown from './ScrollDown';

const ScrollDownButton = styled(ScrollDown)`
  position: absolute;
  bottom: 15%;
  left: 10px;
  scale: 0.6;

  // Tablet version
  @media only screen and (min-width: 450px) {
    bottom: 25%;
    scale: 0.8;
    left: 20px;
  }
  // Computer version
  @media only screen and (min-width: 800px) {
    scale: 1;
    bottom: 10%;
    left: 40px;
  }
`;

function PageWrapper({ children }) {
  //write code here
  function scrollDown() {
    const windowHeight = window.innerHeight;
    window.scrollTo(0, windowHeight);
  }
  return (
    <>
      <Loader />
      <GoTop />
      <ScrollDownButton fn={scrollDown} />
      {children}
    </>
  );
}

PageWrapper.prototype = {
  children: PropTypes.node,
};
export default PageWrapper;
