import styled from 'styled-components';
import Section from '../../components/Section';
import { contentFontSize, footerHeight } from '../../style';
import { useTranslation } from 'react-i18next';
import React from 'react';
import { NOTFOUNDType } from '@/types/global';

const Container = styled(Section)`
  /* use height to prevent scroll */
  height: calc(100vh - ${footerHeight.mobile}px);
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-weight: 400;
  font-size: ${contentFontSize.mobile};
  text-align: center;

  //^ Tablet version
  @media only screen and (min-width: 450px) {
    height: calc(100vh - ${footerHeight.tablet}px);
  }

  //^ Computer version
  @media only screen and (min-width: 800px) {
    font-size: ${contentFontSize.pc};
    height: calc(100vh - ${footerHeight.pc}px);
  }
`;
function NotFound() {
  //write code here
  const { t } = useTranslation();
  const nonFoundText = t('not-found') as NOTFOUNDType;
  return (
    <Container>
      <p>{nonFoundText}</p>
    </Container>
  );
}

export default NotFound;
