import styled from 'styled-components';
import { navHeight, navMenuZIndex } from '../style';
import BurgerMenu from './navbar/BurgerMenu';
import Logo from './navbar/Logo';
import LangSwitcher from './navbar/LangSwitcher';
import { useMotionValueEvent, useScroll } from 'motion/react';
import { useRef } from 'react';

const Nav = styled.nav`
  width: 100%;
  height: ${navHeight}px;
  background: linear-gradient(
    180deg,
    rgba(44, 51, 57, 1) 0%,
    rgba(255, 255, 255, 0) 100%
  );
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  position: fixed;
  top: 0;

  z-index: ${navMenuZIndex};
`;

function Navbar() {
  //write code here
  const { scrollY } = useScroll();
  const navRef = useRef(null);

  useMotionValueEvent(scrollY, 'change', (latest) => {
    const nav = navRef.current;
    // this id dark-nav exists in index.css file
    if (latest > 100) nav.id = 'dark-nav';
    else nav.removeAttribute('id');
  });

  return (
    <Nav ref={navRef}>
      <BurgerMenu />
      <Logo />
      <LangSwitcher />
    </Nav>
  );
}

export default Navbar;
