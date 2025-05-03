import React, { useEffect, useState } from 'react';
import BurgerMenuIcon from './BurgerMenuIcon';
import styled from 'styled-components';
import { motion } from 'motion/react';
import { bgColor, navMenuZIndex } from '../../style';
import { useTranslation } from 'react-i18next';
import BurgerMenuItem from './BurgerMenuItem';
import { MotionVariants, NavTypes } from '@/types/global';

const MenuContainer = styled(motion.div)`
  position: fixed;
  height: 100vh;
  width: 100vw;
  top: 0;
  left: 0;
  background-color: ${bgColor};
  z-index: ${navMenuZIndex};
  opacity: 0.96;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;
const delay: number = 0.5;
const menuVariants: {
  init: MotionVariants;
  open: MotionVariants;
} = {
  init: {
    width: 0,
    height: 0,
    borderBottomRightRadius: '500%',
    display: 'none',
    transition: {
      delay: 1,
      height: { duration: 0.7, delay },
      width: { duration: 0.5, delay },
      borderBottomRightRadius: { duration: 0.9, delay },
      borderBottomLeftRadius: { duration: 0.9, delay },
    },
  },
  open: {
    width: '100vw',
    height: '100vh',
    borderBottomRightRadius: 0,
    display: 'flex',
    transition: {
      type: 'tween',
      duration: 0.7,
      height: { duration: 0.4 },
      borderBottomRightRadius: { duration: 0.4 },
    },
  },
};
function BurgerMenu() {
  //write code here
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  useEffect(() => {
    if (isOpen) document.body.classList.add('no-scroll');
    else document.body.classList.remove('no-scroll');
  }, [isOpen]);
  const { t } = useTranslation();
  const navButtons = t('nav.buttons', {
    returnObjects: true,
  }) as NavTypes['buttons'];
  return (
    <>
      <BurgerMenuIcon isOpen={isOpen} fn={toggleMenu} />
      <MenuContainer
        variants={menuVariants}
        initial="init"
        animate={isOpen ? 'open' : 'init'}
      >
        {navButtons.map(([text, href], i) => (
          <BurgerMenuItem
            fn={toggleMenu}
            key={i}
            href={href}
            text={text}
            delay={i * 0.3 + 0.6}
            isOpen={isOpen}
          />
        ))}
      </MenuContainer>
    </>
  );
}

export default BurgerMenu;
