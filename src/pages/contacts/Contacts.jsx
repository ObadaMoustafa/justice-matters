import styled from 'styled-components';
import Section from '../../components/Section';
import Map from './components/Map';
import { motion } from 'motion/react';
import LookDownImage from '../../components/LookDownImage';
import PageWrapper from '../../components/PageWrapper';
import { btnColor, contentFontSize } from '../../style';
import Parallax from '../../components/Parallax';
import AnimatedTitle from '../../components/text/AnimatedTitle';
import { useTranslation } from 'react-i18next';
import FlipButton2 from '../../components/buttons/FlipButton2';

const headerBg =
  'https://st2.depositphotos.com/1265075/7581/i/450/depositphotos_75818865-stock-photo-web-contact-us-concept.jpg';
const lookDownImage =
  'https://res.cloudinary.com/elsharbatly/image/upload/v1731131811/NEOX/Images/lookDown_xz1uoo.png';

/* Styled components */
// Header
const Header = styled(Parallax)`
  height: 30vh;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: top;
  opacity: 0.8;

  //^ Tablet version
  @media only screen and (min-width: 450px) {
    height: 40vh;
  }

  //^ Computer version
  @media only screen and (min-width: 800px) {
    height: 80vh;
    background-size: cover;
    background-position: bottom;
  }
`;

const StyledLookDown = styled(LookDownImage)`
  bottom: -25px;
  right: 5%;
  //^ Tablet version
  @media only screen and (min-width: 450px) {
    bottom: -35px;
    left: 25%;
    right: false;
  }

  //^ Computer version
  @media only screen and (min-width: 800px) {
    bottom: -65px;
    right: 5%;
  }
`;

// Contacts section
const ContactsSection = styled(Section)`
  margin-top: 30px;
  padding-top: 0;
  position: relative;

  //^ Computer version
  @media only screen and (min-width: 800px) {
    padding-top: 50px;
  }
`;

const ContactMethodsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  width: 100%;
  margin: 35px auto;
  > :first-child {
    order: -2;
  }

  /* last child is the map */
  > :last-child {
    order: -1;
  }

  //^ Tablet version
  @media only screen and (min-width: 450px) {
    gap: 50px;
  }

  //^ Computer version
  @media only screen and (min-width: 800px) {
    justify-content: flex-start;
    align-items: flex-start;
    gap: 40px;
    margin-top: 100px;
  }
`;

// contact methods

const FlipContactMethodButton = styled(motion.create(FlipButton2))`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
  color: ${btnColor};
  font-size: ${contentFontSize.mobile};

  h2 {
    font-size: inherit;
    color: inherit;
    font-weight: 400;
    text-align: center;
  }

  //^ Tablet version
  @media only screen and (min-width: 450px) {
    flex-direction: row;
  }

  //^ Computer version
  @media only screen and (min-width: 800px) {
    font-size: ${contentFontSize.pc};
  }
`;

const TheMap = styled(motion.create(Map))`
  height: 350px;
  width: 100vw;
  align-self: center;
  transform-origin: center center;

  //^ Tablet version
  @media only screen and (min-width: 450px) {
    height: 500px;
  }

  //^ Computer version
  @media only screen and (min-width: 800px) {
    height: 55vh;
  }
`;

/* End of styled components */

//? animations
const mapVariants = {
  initial: {
    opacity: 0,
    width: 0,
  },
  show: {
    width: '100vw',
    opacity: 1,
    transition: { duration: 1 },
  },
};

const contactMethodsVariants = {
  logo: {
    initial: { x: -5 },
    show: { x: 0, transition: { duration: 0.5 } },
  },
  title: {
    initial: {
      opacity: 0,
      y: 20,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  },
};
function Contacts() {
  //write code here
  const { t } = useTranslation();
  const contactMethods = t('contacts.content', { returnObjects: true });

  return (
    <PageWrapper>
      <Header backgroundSrc={headerBg}>
        <StyledLookDown src={lookDownImage} alt="look down" />
      </Header>
      <ContactsSection>
        <AnimatedTitle text={t('contacts.title')} delay={2} />
        {/* contact methods */}
        <ContactMethodsContainer>
          {contactMethods.map(({ iconClasses, title, href }, index) => (
            <FlipContactMethodButton key={index} href={href}>
              <motion.i
                className={iconClasses}
                variants={contactMethodsVariants.logo}
                initial="initial"
                whileInView="show"
              ></motion.i>
              <motion.h2
                variants={contactMethodsVariants.title}
                initial="initial"
                whileInView="show"
              >
                {title}
              </motion.h2>
            </FlipContactMethodButton>
          ))}
          <TheMap
            key={44}
            variants={mapVariants}
            initial="initial"
            whileInView="show"
          />
        </ContactMethodsContainer>
      </ContactsSection>
    </PageWrapper>
  );
}

export default Contacts;
