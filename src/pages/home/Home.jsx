import Header from './components/Header';
import PageWrapper from '../../components/PageWrapper';
import BVSection from './sections/BVSection';
import Divider from '../../components/Divider';
import SolutionSection from './sections/SolutionSection';
import AdvantagesSection from './sections/AdvantagesSection';
import ServicesSection from './sections/ServicesSection';
function Home() {
  //write code here

  return (
    <PageWrapper>
      <Header />
      <BVSection />
      <Divider />
      <SolutionSection />
      <Divider />
      <AdvantagesSection />
      <Divider />
      <ServicesSection />
    </PageWrapper>
  );
}

export default Home;
