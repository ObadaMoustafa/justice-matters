import styled from 'styled-components';
import Section from '../../../components/Section';
import { useTranslation } from 'react-i18next';
import AnimatedTitle from '../../../components/text/AnimatedTitle';
import MainText from '../../../components/MainText';
import PhotoSlider from '../../../components/media/PhotoSlider';
import image1 from '../../../images-test/pexels-bijoubaby-5248733.jpg';
import image2 from '../../../images-test/pexels-dariabuntaria-2209529.jpg';
import image3 from '../../../images-test/pexels-marianna-zuzanna-498248397-16442688.jpg';
import image4 from '../../../images-test/pexels-michelangelo-buonarroti-4176226.jpg';
import image5 from '../../../images-test/pexels-mvntlie-17085462.jpg';
import image6 from '../../../images-test/pexels-tiger-lily-4487449.jpg';
import { contentFontSize, textColor, titleColor } from '../../../style';
import { motion, useAnimation, useInView } from 'motion/react';
import { useEffect, useRef } from 'react';
const images = [image1, image2, image3, image4, image5, image6];

const SectionContainer = styled(Section)`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;

  //^ Computer version
  @media only screen and (min-width: 800px) {
    align-items: flex-start;
  }
`;

const MotionMainText = motion.create(MainText);

// content are the List and PhotoSlider
const ContentContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;

  //^ Computer version
  @media only screen and (min-width: 800px) {
    flex-direction: row;
  }
`;

const StyledList = styled(motion.ul)`
  list-style: none;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;
const StyledListElement = styled(motion.li)`
  font-size: ${contentFontSize.mobile};
  color: ${titleColor};
  > i {
    color: ${textColor};
    margin-right: 10px;
  }

  //^ Tablet version
  @media only screen and (min-width: 450px) {
    font-size: ${contentFontSize.pc};
  }
`;

const StyledPhotoSlider = styled(motion.create(PhotoSlider))`
  //^ Computer version
  @media only screen and (min-width: 800px) {
    justify-content: flex-end;
  }
`;

//? animation
const listVariants = {
  init: { x: 0, y: 100, opacity: 0, transition: { duration: 0 } },
  show: { x: 0, y: 0, opacity: 1 },
};

function BVSection() {
  //write code here
  const animateJobs = useAnimation();
  const animateSlider = useAnimation();
  const listRef = useRef(null);
  const isListInView = useInView(listRef);
  const photoSliderRef = useRef(null);
  const isSliderInView = useInView(photoSliderRef);

  useEffect(() => {
    if (isListInView) animateJobs.start('show');
    else animateJobs.start('init');

    if (isSliderInView) animateSlider.start('show');
    else animateSlider.start('init');
  }, [isListInView, isSliderInView]);
  const { t } = useTranslation();
  const pageContent = t('homepage.content.BV', { returnObjects: true });

  return (
    <SectionContainer>
      <AnimatedTitle text={pageContent.title} />
      <MotionMainText
        variants={listVariants}
        initial="init"
        whileInView="show"
        viewport={{ once: true }}
        transition={{ delay: 0.9 }}
      >
        {pageContent.content}
      </MotionMainText>
      <ContentContainer>
        <StyledList
          variants={listVariants}
          ref={listRef}
          initial="init"
          animate={animateJobs}
          transition={{ staggerChildren: 0.2 }}
        >
          {pageContent.sectors.map((sector, index) => (
            <StyledListElement
              key={index}
              variants={listVariants}
              transition={{ duration: 0.5 }}
            >
              <i className="fa-regular fa-circle-check"></i> {sector}
            </StyledListElement>
          ))}
        </StyledList>
        <StyledPhotoSlider
          images={images}
          ref={photoSliderRef}
          variants={listVariants}
          initial="init"
          animate={animateSlider}
          transition={{ duration: 0.5 }}
        />
      </ContentContainer>
    </SectionContainer>
  );
}

BVSection.propTypes = {};
export default BVSection;
