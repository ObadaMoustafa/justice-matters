import { useTranslation } from 'react-i18next';
import Section from '../../../components/Section';
import AnimatedTitle from '../../../components/text/AnimatedTitle';
import styled from 'styled-components';
import AnimateByLine from '../../../components/text/AnimateByLine';

const SectionContainer = styled(Section)`
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;

  //^ Tablet version
  @media only screen and (min-width: 450px) {
    align-items: flex-start;
  }
`;
function SecondmentSection() {
  //write code here
  const { t } = useTranslation();
  const content = t('about.secondment', { returnObjects: true });
  return (
    <SectionContainer>
      <AnimatedTitle text={content.title} />
      <AnimateByLine text={content.text} />
    </SectionContainer>
  );
}

export default SecondmentSection;
