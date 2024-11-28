import PropTypes from 'prop-types';
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

FooterBlock.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
  className: PropTypes.string,
};
export default FooterBlock;
