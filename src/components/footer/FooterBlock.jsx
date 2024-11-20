import FooterTitle from './FooterTitle';
function FooterBlock({ children, title, className }) {
  //write code here

  return (
    <div className={'footer-block' + className}>
      <FooterTitle text={title} />
      {children}
    </div>
  );
}

export default FooterBlock;
