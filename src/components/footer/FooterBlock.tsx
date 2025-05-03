import FooterTitle from './FooterTitle';
import React, { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  title: string;
  className?: string;
};
function FooterBlock({ children, title, className }: Props) {
  //write code here

  return (
    <div className={'footer-block' + className}>
      <FooterTitle text={title} />
      {children}
    </div>
  );
}

export default FooterBlock;
