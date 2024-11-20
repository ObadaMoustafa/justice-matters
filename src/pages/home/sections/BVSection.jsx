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
const images = [image1, image2, image3, image4, image5, image6];

const SectionContainer = styled(Section)`
  min-height: 100vh;
`;

const StyledPhotoSlider = styled(PhotoSlider)`
  width: 80%;

  //^ Computer version
  @media only screen and (min-width: 800px) {
    width: 500px;
  }
`;

function BVSection() {
  //write code here
  const { t } = useTranslation();
  const pageContent = t('homepage.content.BV', { returnObjects: true });

  return (
    <SectionContainer>
      <AnimatedTitle text={pageContent.title} />
      <MainText>{pageContent.content}</MainText>
      <ul>
        {pageContent.sectors.map((sector, index) => (
          <li key={index}>{sector}</li>
        ))}
      </ul>
      <StyledPhotoSlider images={images} />
    </SectionContainer>
  );
}

BVSection.propTypes = {};
export default BVSection;
