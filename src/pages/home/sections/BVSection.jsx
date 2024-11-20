import styled from 'styled-components';
import Section from '../../../components/Section';
import { useTranslation } from 'react-i18next';
import AnimatedTitle from '../../../components/text/AnimatedTitle';
import MainText from '../../../components/MainText';

const SectionContainer = styled(Section)`
  min-height: 100vh;
`;

function BVSection() {
  //write code here
  const { t } = useTranslation();
  const pageContent = t('homepage.content.BV', { returnObjects: true });
  console.log(pageContent);

  return (
    <SectionContainer>
      <AnimatedTitle text={pageContent.title} />
      <MainText>{pageContent.content}</MainText>
      <ul>
        {pageContent.sectors.map((sector, index) => (
          <li key={index}>{sector}</li>
        ))}
      </ul>
    </SectionContainer>
  );
}

BVSection.propTypes = {};
export default BVSection;
