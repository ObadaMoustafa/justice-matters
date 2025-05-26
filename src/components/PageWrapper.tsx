import React, { ReactNode } from 'react';
import GoTop from './GoTop';
import Loader from './Loader';

type Props = {
  children: ReactNode;
};

function PageWrapper({ children }: Props) {
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
