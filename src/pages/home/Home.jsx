import Header from './components/Header';
import PageWrapper from '../../components/PageWrapper';
import BVSection from './sections/BVSection';
import Divider from '../../components/Divider';
import SolutionSection from './sections/SolutionSection';
function Home() {
  //write code here

  return (
    <PageWrapper>
      <Header />
      <BVSection />
      <SolutionSection />
    </PageWrapper>
  );
}

export default Home;
