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
  'https://res.cloudinary.com/elsharbatly/image/upload/v1732361513/NEOX/Images/EAS/pexels-tiger-lily-4487449_oyahkh.jpg',
  'https://res.cloudinary.com/elsharbatly/image/upload/v1732361513/NEOX/Images/EAS/pexels-tima-miroshnichenko-6196685_xq74vc.jpg',
  'https://res.cloudinary.com/elsharbatly/image/upload/v1732361513/NEOX/Images/EAS/pexels-mvntlie-17085462_o3l8nu.jpg',
  'https://res.cloudinary.com/elsharbatly/image/upload/v1732361512/NEOX/Images/EAS/Is-Truck-Driving-a-Good-Career_fdcmpw.jpg',
  'https://res.cloudinary.com/elsharbatly/image/upload/v1732361512/NEOX/Images/EAS/pexels-bijoubaby-5248733_udnnza.jpg',
  'https://res.cloudinary.com/elsharbatly/image/upload/v1732361513/NEOX/Images/EAS/pexels-michelangelo-buonarroti-4176226_klfflp.jpg',
  'https://res.cloudinary.com/elsharbatly/image/upload/v1732361513/NEOX/Images/EAS/pexels-mdanialasyraf-2480481_oz8lld.jpg',
  'https://res.cloudinary.com/elsharbatly/image/upload/v1732361512/NEOX/Images/EAS/pexels-dariabuntaria-2209529_lkc0tk.jpg',
  'https://res.cloudinary.com/elsharbatly/image/upload/v1732361512/NEOX/Images/EAS/pexels-marianna-zuzanna-498248397-16442688_ll1ydo.jpg',
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
