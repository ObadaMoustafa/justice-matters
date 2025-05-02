import React from 'react';
import Header from './components/Header';
import PageWrapper from '../../components/PageWrapper';
import ActivitiesSection from './sections/ActivitiesSection';
import Divider from '../../components/Divider';
import SolutionSection from './sections/SolutionSection';
import AdvantagesSection from './sections/AdvantagesSection';
function Home() {
  //write code here

  return (
    <PageWrapper>
      <Header />
      <ActivitiesSection />
      <Divider />
      <SolutionSection />
      <Divider />
      <AdvantagesSection />
    </PageWrapper>
  );
}

export default Home;
