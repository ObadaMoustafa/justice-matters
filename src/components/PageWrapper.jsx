import PropTypes from 'prop-types';
import GoTop from './GoTop';
import Loader from './Loader';

function PageWrapper({ children }) {
  //write code here

  return (
    <>
      <Loader />
      <GoTop />
      {children}
    </>
  );
}

PageWrapper.prototype = {
  children: PropTypes.node,
};
export default PageWrapper;
