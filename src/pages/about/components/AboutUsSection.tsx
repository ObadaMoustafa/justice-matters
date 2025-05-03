import { useTranslation } from 'react-i18next';
import Section from '../../../components/Section';
import AnimatedTitle from '../../../components/text/AnimatedTitle';
import styled from 'styled-components';
import AnimateByLine from '../../../components/text/AnimateByLine';
import React from 'react';
import { AboutTypes } from '@/types/global';

const AboutUsContainer = styled(Section)`
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
function AboutUsSection() {
  //write code here
  const { t } = useTranslation();
  const content = t('about.main', {
    returnObjects: true,
  }) as AboutTypes['main'];
  return (
    <AboutUsContainer>
      <AnimatedTitle text={content.title} />
      <AnimateByLine text={content.text} />
    </AboutUsContainer>
  );
}

export default AboutUsSection;
