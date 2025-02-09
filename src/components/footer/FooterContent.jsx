import PropTypes from 'prop-types';

function FooterContent({ children }) {
  //write code here

  return <div>{children}</div>;
}

FooterContent.propTypes = {
  children: PropTypes.node,
};
export default FooterContent;
