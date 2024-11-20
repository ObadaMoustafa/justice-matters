import styled from 'styled-components';
import Section from '../../components/Section';
import { motion } from 'motion/react';
import AnimatedTitle from '../../components/text/AnimatedTitle';
import { useTranslation } from 'react-i18next';
import Image from '../../components/media/Image';
import { contentFontSize, imgBorderRadius, textColor } from '../../style';
import { useContext } from 'react';
import { WindowContext } from '../../contexts/WindowContext';
import LookDownImage from '../../components/LookDownImage';
import PageWrapper from '../../components/PageWrapper';
import Parallax from '../../components/Parallax';
import MainText from '../../components/MainText';

// header of the page
const Header = styled(Parallax)`
  height: 100vh;
  background-position: center;
  //^ Computer version
  @media only screen and (min-width: 800px) {
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

const AboutUsText = motion.create(MainText);

const AboutUsImageMobile = styled(motion.create(Image))`
  width: 100%;
  height: fit-content;
`;

const AboutUsContentContainerPc = styled(motion.div)`
  height: 50vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  column-gap: 150px;
  margin: 150px 0;
`;

const AboutUsImagePc = styled(motion.create(Image))`
  min-width: 40%;
  max-height: 100%;
  border-radius: ${imgBorderRadius}px;
  flex-grow: 2;
`;

//? Animations' Variants

const aboutUsMobileVariants = {
  init: { x: 0, y: 100, opacity: 0 },
  show: { x: 0, y: 0, opacity: 1 },
};

const aboutUsPCVariants = {
  init: { scaleX: 1.5, opacity: 0 },
  show: { scaleX: 1, opacity: 1, transition: { duration: 1 } },
};
function About() {
  const { t } = useTranslation();
  const aboutUsContent = t('about.content', { returnObjects: true });
  const { isMobile } = useContext(WindowContext);
  return (
    <PageWrapper>
      <Header backgroundSrc="https://res.cloudinary.com/elsharbatly/image/upload/v1730110321/NEOX/Images/Business_with_ESA_pillars_bkcu4m.jpg">
        <ParallaxLookDownImage src="https://res.cloudinary.com/elsharbatly/image/upload/v1730110321/NEOX/Images/look-down_srmwsu.png" />
      </Header>
      <StyledSection>
        <AnimatedTitle text={t('about.title.0')} />
        <AnimatedTitle text={t('about.title.1')} />
        {/* showing content with different animation variants and different images */}
        {isMobile ? (
          <>
            {aboutUsContent.map(({ text }, i) => (
              <AboutUsText
                variants={aboutUsMobileVariants}
                initial="init"
                whileInView="show"
                transition={{ duration: 1 }}
                key={i}
              >
                {text}
              </AboutUsText>
            ))}
            <AboutUsImageMobile
              variants={aboutUsMobileVariants}
              initial="init"
              whileInView="show"
              transition={{ duration: 1 }}
              src="https://res.cloudinary.com/elsharbatly/image/upload/v1730110321/NEOX/Images/workers_b524zs.png"
            />
          </>
        ) : (
          <>
            {aboutUsContent.map(({ text, image }, i) => (
              <AboutUsContentContainerPc
                key={i}
                style={i % 2 !== 0 ? { flexDirection: 'row-reverse' } : {}}
                variants={aboutUsPCVariants}
                initial="init"
                whileInView="show"
              >
                <AboutUsText>{text}</AboutUsText>
                <AboutUsImagePc src={image} />
              </AboutUsContentContainerPc>
            ))}
          </>
        )}
      </StyledSection>
    </PageWrapper>
  );
}

export default About;
