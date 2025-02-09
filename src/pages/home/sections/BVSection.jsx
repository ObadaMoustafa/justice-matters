import styled from 'styled-components';
import Section from '../../../components/Section';
import { useTranslation } from 'react-i18next';
import AnimatedTitle from '../../../components/text/AnimatedTitle';
import MainText from '../../../components/MainText';
import PhotoSlider from '../../../components/media/PhotoSlider';
import { contentFontSize, textColor, titleColor } from '../../../style';
import { motion, useAnimation, useInView } from 'motion/react';
import { useEffect, useRef } from 'react';

const images = [
  'https://res.cloudinary.com/elsharbatly/image/upload/v1739119984/justice-matters/website/Homepage/WhatsApp_Image_2024-07-25_at_10.43.09_455f85ef_o99mrg.jpg',
  'https://res.cloudinary.com/elsharbatly/image/upload/v1739119984/justice-matters/website/Homepage/WhatsApp_Image_2025-01-25_at_16.47.26_678cccfb_bpkmbg.jpg',
  'https://res.cloudinary.com/elsharbatly/image/upload/v1739119984/justice-matters/website/Homepage/WhatsApp_Image_2025-01-26_at_18.52.47_ebd482e7_sdjkgu.jpg',
  'https://res.cloudinary.com/elsharbatly/image/upload/v1739119984/justice-matters/website/Homepage/WhatsApp_Image_2024-06-24_at_00.17.22_b0ec3c28_lpneya.jpg',
  'https://res.cloudinary.com/elsharbatly/image/upload/v1739119985/justice-matters/website/Homepage/WhatsApp_Image_2025-01-25_at_16.47.34_8429f390_gglezn.jpg',
  'https://res.cloudinary.com/elsharbatly/image/upload/v1739119985/justice-matters/website/Homepage/WhatsApp_Image_2025-01-25_at_16.47.34_fdab28fc_ghmp83.jpg',
  'https://res.cloudinary.com/elsharbatly/image/upload/v1739119985/justice-matters/website/Homepage/WhatsApp_Image_2025-01-25_at_16.48.05_221bba06_hrmjqz.jpg',
  'https://res.cloudinary.com/elsharbatly/image/upload/v1739119985/justice-matters/website/Homepage/WhatsApp_Image_2025-01-26_at_18.07.13_637cafd5_cukkbu.jpg',
  'https://res.cloudinary.com/elsharbatly/image/upload/v1739119985/justice-matters/website/Homepage/WhatsApp_Image_2025-01-25_at_16.48.07_122a9990_wwdq26.jpg',
  'https://res.cloudinary.com/elsharbatly/image/upload/v1739119985/justice-matters/website/Homepage/WhatsApp_Image_2025-01-26_at_18.04.32_c910591e_jwvqno.jpg',
  'https://res.cloudinary.com/elsharbatly/image/upload/v1739119986/justice-matters/website/Homepage/WhatsApp_Image_2025-01-26_at_18.52.47_60e141e2_vxkxvt.jpg',
  'https://res.cloudinary.com/elsharbatly/image/upload/v1739119985/justice-matters/website/Homepage/WhatsApp_Image_2025-01-26_at_18.04.31_d5f38b0e_jjlj8v.jpg',
];

const SectionContainer = styled(Section)`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 40px;

  //^ Tablet version
  @media only screen and (min-width: 450px) {
    align-items: flex-start;
  }
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
  init: { y: 100, opacity: 0, transition: { duration: 0 } },
  show: { y: 0, opacity: 1 },
};

function BVSection() {
  //write code here
  const animateJobs = useAnimation();
  const listRef = useRef(null);
  const isListInView = useInView(listRef, { once: true });

  useEffect(() => {
    if (isListInView) animateJobs.start('show');
    else animateJobs.start('init');
  }, [isListInView]);
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
        transition={{ duration: 0.8, delay: 0.1 }}
      >
        {pageContent.content}
      </MotionMainText>
      <ContentContainer>
        <StyledList
          variants={listVariants}
          ref={listRef}
          initial="init"
          animate={animateJobs}
          transition={{ staggerChildren: 0.15 }}
        >
          {pageContent.sectors.map((sector, index) => (
            <StyledListElement
              key={index}
              variants={listVariants}
              transition={{ duration: 0.2 }}
            >
              <i className="fa-regular fa-circle-check"></i> {sector}
            </StyledListElement>
          ))}
        </StyledList>
        <StyledPhotoSlider
          images={images}
          variants={listVariants}
          initial="init"
          whileInView="show"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        />
      </ContentContainer>
    </SectionContainer>
  );
}

BVSection.propTypes = {};
export default BVSection;
