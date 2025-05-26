import React from 'react';
import styled from 'styled-components';
import { btnColor } from '../style';

const ScrollButton = styled.div`
  display: inline-block;
  -webkit-transform: translate(0, -50%);
  transform: translate(0, -50%);
  color: #fff;
  font: normal 400 20px/1 'Josefin Sans', sans-serif;
  letter-spacing: 0.1em;
  text-decoration: none;
  transition: opacity 0.3s;
  padding-top: 80px;
  cursor: pointer;
  width: 35px;
  height: 45px;
  z-index: 5;

  &:hover span {
    border-left: 1px solid ${btnColor};
    border-bottom: 1px solid ${btnColor};
    scale: 1.5;
    opacity: 1;
    transition: all 1s;
  }

  span {
    position: absolute;
    top: 0;
    left: 50%;
    width: 15px;
    height: 15px;
    margin-left: -12px;
    border-left: 1px solid #fff;
    border-bottom: 1px solid #fff;
    -webkit-transform: rotate(-45deg);
    transform: rotate(-45deg);
    -webkit-animation: sdb07 2s infinite;
    animation: sdb07 2s infinite;
    opacity: 0;
    box-sizing: border-box;
  }
  span:nth-of-type(1) {
    -webkit-animation-delay: 0s;
    animation-delay: 0s;
  }
  span:nth-of-type(2) {
    top: 16px;
    -webkit-animation-delay: 0.15s;
    animation-delay: 0.15s;
  }
  span:nth-of-type(3) {
    top: 32px;
    -webkit-animation-delay: 0.3s;
    animation-delay: 0.3s;
  }
  span:nth-of-type(4) {
    top: 48px;
    -webkit-animation-delay: 0.45s;
    animation-delay: 0.45s;
  }
  span:nth-of-type(5) {
    top: 64px;
    -webkit-animation-delay: 0.6s;
    animation-delay: 0.6s;
  }
  @-webkit-keyframes sdb07 {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
  @keyframes sdb07 {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`;
type Props = {
  className?: string;
};
function ScrollDown({ className }: Props) {
  //write code here
  function scrollDown(): void {
    const windowHeight: number = window.innerHeight;
    window.scrollTo(0, windowHeight);
  }
  return (
    <ScrollButton className={className} onClick={scrollDown}>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </ScrollButton>
  );
}

export default ScrollDown;
