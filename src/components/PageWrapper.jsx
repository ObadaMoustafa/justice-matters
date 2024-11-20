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

export default PageWrapper;
