import React from 'react';
import Section from '../../../components/Section';
import AnimatedTitle from '../../../components/text/AnimatedTitle';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import MainText from '../../../components/MainText';
import { motion } from 'motion/react';
import {
  btnColor,
  contentFontSize,
  imgBorderRadius,
  mainTextFontSize,
} from '../../../style';
import Image from '../../../components/media/Image';
import { HomeTypes } from '@/types/global';

const networkImg =
  'https://res.cloudinary.com/elsharbatly/image/upload/v1739385126/justice-matters/website/Homepage/IMG_1140_tgouzf.jpg';

const SectionContainer = styled(motion.create(Section))`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  //^ Tablet version
  @media only screen and (min-width: 450px) {
    align-items: flex-start;
  }

  //^ Computer version
  @media only screen and (min-width: 800px) {
    gap: 40px;
  }
`;

const ContentContainer = styled.div`
  // second child is the Image
  > :nth-child(2) {
    display: none;
  }
  //^ Computer version
  @media only screen and (min-width: 800px) {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 50px;
    > :nth-child(2) {
      width: 60%;
      border-radius: ${imgBorderRadius.pc}px;
      display: block;
    }
  }
`;
const AdvantagesContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 50px;
  //^ Computer version
  @media only screen and (min-width: 800px) {
    align-items: flex-start;
    width: 80%;
  }
`;

const SingleAdvantageContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 10px;
  text-align: left;
  overflow: hidden;

  > .sub-title {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 15px;

    > i {
      font-size: ${mainTextFontSize.mobile};
      color: ${btnColor};

      //^ Tablet version
      @media only screen and (min-width: 450px) {
        font-size: ${mainTextFontSize.pc};
      }
    }
  }
`;

const StyledMainText = styled(motion.create(MainText))`
  transform-origin: left;
  text-align: left;
  font-weight: 700;
`;

const StyledText = styled(motion.create(MainText))`
  padding-left: 30px;
  text-align: left;
  font-size: ${contentFontSize.mobile};
  color: ${btnColor};

  //^ Tablet version
  @media only screen and (min-width: 450px) {
    padding-left: 45px;
  }

  //^ Computer version
  @media only screen and (min-width: 800px) {
    font-size: ${contentFontSize.pc};
  }
`;

const AnimatedImage = motion.create(Image);
//? motion variants
const wholeAdvantageVariants = {
  init: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const subTitleVariants = {
  init: { y: -100 },
  show: {
    y: 0,
    transition: { duration: 0.5 },
  },
};

const textVariants = {
  init: {
    y: 100,
    transition: { duration: 0 },
  },
  show: {
    y: 0,
    transition: { duration: 0.5 },
  },
};

const imageVariants = {
  init: {
    x: 200,
  },
  show: {
    x: 0,
    transition: { duration: 0.5 },
  },
};

function AdvantagesSection() {
  //write code here
  const { t } = useTranslation();
  const sectionText = t('homepage.content.advantages', {
    returnObjects: true,
  }) as HomeTypes['content']['advantages'];
  return (
    <SectionContainer>
      <AnimatedTitle text={sectionText.title} />;
      <ContentContainer>
        <AdvantagesContainer>
          {sectionText.content.map(({ strong, text }, i) => (
            <SingleAdvantageContainer
              key={i}
              variants={wholeAdvantageVariants}
              initial="init"
              whileInView="show"
            >
              <motion.div className="sub-title" variants={subTitleVariants}>
                <i className="fa-solid fa-check-to-slot"></i>
                <StyledMainText>{strong}</StyledMainText>
              </motion.div>
              <StyledText variants={textVariants}>{text}</StyledText>
            </SingleAdvantageContainer>
          ))}
        </AdvantagesContainer>
        <AnimatedImage
          src={networkImg}
          alt="network"
          variants={imageVariants}
          initial="init"
          whileInView="show"
          viewport={{ once: true }}
        />
      </ContentContainer>
    </SectionContainer>
  );
}

export default AdvantagesSection;
