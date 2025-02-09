import styled from 'styled-components';
import Section from '../../components/Section';
import { useContext } from 'react';
import { WindowContext } from '../../contexts/WindowContext';
import LookDownImage from '../../components/LookDownImage';
import PageWrapper from '../../components/PageWrapper';
import Parallax from '../../components/Parallax';
import AboutUsSection from './components/AboutUsSection';
import LineDivider from '../../components/LineDivider';
import SelectionSection from './components/SelectionSection';
import TemporarySection from './components/TemporarySection';
import SecondmentSection from './components/SecondmentSection';

// header of the page
const Header = styled(Parallax)`
  height: 100vh;
  background-position: center;
  opacity: 0.5;
  //^ Computer version
  @media only screen and (min-width: 800px) {
    height: 100vh;
    background-position: top;
  }
`;

// about us section
const StyledSection = styled(Section)`
  min-height: 100vh;
  overflow: hidden;
`;

function About() {
  const { isMobile } = useContext(WindowContext);
  return (
    <PageWrapper>
      <Header
        backgroundSrc={
          isMobile
            ? 'https://res.cloudinary.com/elsharbatly/image/upload/v1739122465/justice-matters/website/about/WhatsApp_Image_2025-01-26_at_18.07.13_637cafd5_jhysas.jpg'
            : 'https://res.cloudinary.com/elsharbatly/image/upload/v1739121710/justice-matters/website/about/WhatsApp_Image_2025-01-25_at_17.00.31_293c1e68_aanx2z.jpg'
        }
      />
      <StyledSection>
        <AboutUsSection />
        <LineDivider />
        <SelectionSection />
        <LineDivider />
        <TemporarySection />
        <LineDivider />
        <SecondmentSection />
        <LineDivider />
      </StyledSection>
    </PageWrapper>
  );
}

export default About;
