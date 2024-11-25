import styled from 'styled-components';
import Section from '../../../components/Section';
import Image from '../../../components/media/Image';
import MainText from '../../../components/MainText';
import { useTranslation } from 'react-i18next';
import AnimatedTitle from '../../../components/text/AnimatedTitle';
import {
  bgColor,
  imgBorderRadius,
  navHeight,
  xlPadding,
  xsPadding,
} from '../../../style';
import { motion, useAnimation, useInView } from 'motion/react';
import { useEffect, useRef } from 'react';

const puzzleImg =
  'https://res.cloudinary.com/elsharbatly/image/upload/v1732361513/NEOX/Images/EAS/pexels-diva-plavalaguna-6147365_jcxdtb.jpg';
const StyledSection = styled(Section)`
  min-height: 50vh;
  padding: 0;
  padding-top: ${navHeight}px;
  gap: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;

  //^ Tablet version
  @media only screen and (min-width: 450px) {
    align-items: flex-start;
  }

  //^ Computer version
  @media only screen and (min-width: 800px) {
    flex-direction: row;
    padding: 0 ${xlPadding}px;
    padding-top: ${navHeight}px;
  }
`;

const StyledTitle = styled(AnimatedTitle)`
  margin: 0 ${xsPadding}px;
`;
// The container of image and text
const ContentContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  //^ Computer version
  @media only screen and (min-width: 800px) {
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: flex-start;
  }
`;

const SectionImage = styled(motion.create(Image))`
  width: 100%;
  //^ Computer version
  @media only screen and (min-width: 800px) {
    width: 60%;
    border-radius: ${imgBorderRadius.pc}px;
  }
`;

const SectionText = styled.div`
  width: 100%;
  padding: ${xsPadding}px;
  background-color: ${bgColor};
  display: flex;
  flex-direction: column;
  gap: 20px;
  z-index: 5;

  //^ Computer version
  @media only screen and (min-width: 800px) {
    width: 50%;
    margin-top: 0;
    margin-left: -10%;
    padding: 40px;
    border-radius: ${imgBorderRadius.pc}px;
  }
`;

const StyledText = styled(motion.create(MainText))`
  text-align: center;
`;

//? Animation
const imgVariants = {
  init: { y: -100, opacity: 0, transition: { duration: 0.2 } },
  show: { y: 0, opacity: 1, transition: { duration: 1 } },
};

const textVariants = {
  init: { y: 100, opacity: 0, transition: { duration: 0.2 } },
  show: { y: 0, opacity: 1, transition: { duration: 0.5 } },
};
function SolutionSection() {
  const contentRef = useRef(null);
  const isContentInView = useInView(contentRef);
  const animateContent = useAnimation();

  useEffect(() => {
    if (isContentInView) animateContent.start('show');
    else animateContent.start('init');
  }, [isContentInView]);
  const { t } = useTranslation();
  const text = t('homepage.content.solution.content', { returnObjects: true });
  return (
    <StyledSection>
      <StyledTitle text={t('homepage.content.solution.title')} />
      <ContentContainer>
        <SectionImage
          src={puzzleImg}
          alt="puzzle"
          variants={imgVariants}
          initial="init"
          whileInView="show"
        />
        <SectionText>
          {text.map((text, i) => (
            <StyledText
              key={i}
              variants={textVariants}
              initial="init"
              whileInView="show"
            >
              {text}
            </StyledText>
          ))}
        </SectionText>
      </ContentContainer>
    </StyledSection>
  );
}

export default SolutionSection;
