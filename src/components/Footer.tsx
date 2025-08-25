import React from 'react';
import styled from 'styled-components';
import FooterBlock from './footer/FooterBlock';
import { useTranslation } from 'react-i18next';
import { footerHeight, textColor, titleColor, xsPadding } from '../style';
import Section from './Section';
import { FooterType } from '@/types/global';

const FooterContainer = styled(Section)`
  height: ${footerHeight.mobile}px;
  display: grid;
  grid-template-columns: 1fr;
  gap: 10px;
  color: white;
  font-size: 10pt;
  font-weight: 100;
  overflow: hidden;
  padding-top: ${xsPadding}px;
  padding-bottom: ${xsPadding}px;
  margin-top: 50px;
  // shadow
  -webkit-box-shadow: 0px -10px 30px -11px rgba(244, 179, 53, 1);
  -moz-box-shadow: 0px -10px 30px -11px rgba(244, 179, 53, 1);
  box-shadow: 0px -10px 30px -11px rgba(244, 179, 53, 1);

  //^ Tablet version
  @media only screen and (min-width: 450px) {
    height: ${footerHeight.tablet}px;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto auto;

    > .footer-block {
      grid-column: span 1;
    }

    > .footer-block:last-of-type {
      grid-column: span 2;
    }
  }

  //^ Computer version
  @media only screen and (min-width: 800px) {
    height: ${footerHeight.pc}px;
    grid-template-columns: 1fr 1fr 1fr; /* Three columns Computer version */
    grid-template-rows: auto;
    border-top-right-radius: 50%;
    border-top-left-radius: 50%;
    padding-left: 20%;
    padding-right: 20%;
    > .footer-block:last-of-type {
      grid-column: span 1;
    }
  }
`;

const StyledFooterColumn = styled(FooterBlock)`
  // flex for content in the column
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;

  //^ Tablet version
  @media only screen and (min-width: 450px) {
    justify-content: flex-start;
    align-items: flex-start;
  }

  //^ Computer version
  @media only screen and (min-width: 800px) {
    padding: 50px 0;
    justify-content: center;
  }
`;

const Content = styled.div`
  text-align: center;

  //^ Tablet version
  @media only screen and (min-width: 450px) {
    text-align: left;
  }
`;

const HyperLink = styled.a`
  color: white;

  :hover {
    transition: color 400ms;
    color: ${titleColor};
  }
`;

function Footer() {
  //write code here
  const { t } = useTranslation();
  const footerArr = t('footer', { returnObjects: true }) as FooterType;
  return (
    <FooterContainer>
      {footerArr.map(({ title, content }, i) => (
        <StyledFooterColumn key={i} title={title}>
          <div>
            {title !== 'Social Media'
              ? content.map((text, i) => <Content key={i}>{text}</Content>)
              : content.map(([text, url], i) => (
                  <HyperLink target="blank" href={url}>
                    <Content key={i}>{text}</Content>
                  </HyperLink>
                ))}
          </div>
        </StyledFooterColumn>
      ))}
    </FooterContainer>
  );
}

export default Footer;
