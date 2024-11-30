import styled from 'styled-components';
import Section from '../../components/Section';
import { useTranslation } from 'react-i18next';
import { useContext } from 'react';
import { WindowContext } from '../../contexts/WindowContext';
import LookDownImage from '../../components/LookDownImage';
import PageWrapper from '../../components/PageWrapper';
import Parallax from '../../components/Parallax';
import AnimateByLine from '../../components/text/AnimateByLine';

// header of the page
const Header = styled(Parallax)`
  height: 100vh;
  background-position: center;
  //^ Computer version
  @media only screen and (min-width: 800px) {
    height: 100vh;
    background-position: top;
  }
`;

const ParallaxLookDownImage = styled(LookDownImage)`
  bottom: -12px;
  left: 10%;
  //^ Tablet version
  @media only screen and (min-width: 450px) {
    bottom: -25px;
    left: 10%;
  }

  //^ Computer version
  @media only screen and (min-width: 800px) {
    bottom: -40px;
    left: 5%;
  }
`;

// about us section
const StyledSection = styled(Section)`
  min-height: 100vh;
  overflow: hidden;
`;

function About() {
  const { t } = useTranslation();
  const aboutText = t('about.main.text');
  const { isMobile } = useContext(WindowContext);
  return (
    <PageWrapper>
      <Header
        backgroundSrc={
          isMobile
            ? 'https://res.cloudinary.com/elsharbatly/image/upload/v1732959700/NEOX/Images/free-photo-of-man-in-protective-clothing-welding-metal_f6vitj.jpg'
            : 'https://res.cloudinary.com/elsharbatly/image/upload/v1732961214/NEOX/Images/pexels-edmond-dantes-4340037_beeftq.jpg'
        }
      >
        <ParallaxLookDownImage src="https://res.cloudinary.com/elsharbatly/image/upload/v1730110321/NEOX/Images/look-down_srmwsu.png" />
      </Header>
      <StyledSection>
        <AnimateByLine text={aboutText} />
      </StyledSection>
    </PageWrapper>
  );
}

export default About;
