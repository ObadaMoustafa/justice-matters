import styled from 'styled-components';
import { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import AnimatedMultiText from '../../../components/text/AnimatedMultiText';
import Section from '../../../components/Section';
import ScrollDown from '../../../components/ScrollDown';

const StyledHeader = styled.header`
  width: 100%;
  height: 100vh;
  position: relative;

  .animated-text {
    font-size: 1rem;
    width: 100%;
    text-align: center;
    font-weight: 100;
    position: absolute;
    bottom: 50px;
    color: white;
  }

  //^ Tablet version
  @media only screen and (min-width: 450px) {
    .animated-text {
      font-size: 2rem;
      width: 65%;
      text-align: left;
    }
  }
  //^ Computer version
  @media only screen and (min-width: 800px) {
    border-bottom-left-radius: 40%;
    border-bottom-right-radius: 40%;

    .dark-layer {
      border-bottom-left-radius: 40%;
      border-bottom-right-radius: 40%;
    }

    .animated-text {
      font-size: 3rem;
      bottom: 100px;
      text-align: left;
    }
  }
`;

const Video = styled.video`
  object-fit: cover;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  //^ Computer version
  @media only screen and (min-width: 800px) {
    border-bottom-left-radius: 40%;
    border-bottom-right-radius: 40%;
  }
`;

const ScrollDownButton = styled(ScrollDown)`
  position: absolute;
  bottom: 15%;
  left: 10px;
  scale: 0.6;

  // Tablet version
  @media only screen and (min-width: 450px) {
    bottom: 25%;
    scale: 0.8;
    left: 20px;
  }
  // Computer version
  @media only screen and (min-width: 800px) {
    scale: 1;
    bottom: 10%;
    left: 40px;
  }
`;

function Header() {
  //write code here
  const videoRef = useRef(null);
  const stopTime = 55;
  const { t } = useTranslation();
  useEffect(() => {
    const video = videoRef.current;
    // reset the video in the proper timing
    const handleTimeUpdate = () => {
      if (video.currentTime >= stopTime) {
        video.currentTime = 0;
        video.play();
      }
    };
    video.addEventListener('timeupdate', handleTimeUpdate);

    // Cleanup on component unmount
    return () => {
      video.removeEventListener('timeupdate', handleTimeUpdate);
    };
  }, []);

  function scrollDown() {
    const windowHeight = window.innerHeight;
    window.scrollTo(0, windowHeight);
  }
  return (
    <StyledHeader>
      <Video autoPlay muted loop ref={videoRef}>
        <source
          type="video/mp4"
          src="https://res.cloudinary.com/elsharbatly/video/upload/v1731918781/NEOX/3191422-uhd_2732_1440_25fps_nmos8h.mp4"
        />
      </Video>
      <div className="dark-layer"></div>
      <Section className="animated-text">
        <AnimatedMultiText
          textArr={t('homepage.header', { returnObjects: true })}
        />
      </Section>
      <ScrollDownButton fn={scrollDown} />
    </StyledHeader>
  );
}

export default Header;
