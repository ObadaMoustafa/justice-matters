import { AnimatePresence, motion } from 'motion/react';
import { useContext, useEffect } from 'react';
import styled from 'styled-components';
import { LoadingContext } from '../contexts/LoadingContext';
import Image from './media/Image';

const LoaderContainer = styled(motion.div)`
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
  background-color: #00000000;
  z-index: 999;
  display: flex;
  flex-direction: column;
`;

const LoaderSlice = styled(motion.div)`
  background-color: #000000ff;
  width: 100%;
  flex-grow: 1;
`;

const VisualContainer = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;

  .logo-container {
    width: 200px;
    height: 200px;
    position: relative;
    //^ Computer version
    @media only screen and (min-width: 800px) {
      width: 400px;
      height: 400px;
    }
  }
`;

const Logo = styled(motion.create(Image))`
  position: absolute;
  object-fit: contain;
  top: 0;
  left: 0;
`;

function Loader() {
  //write code here
  const { isLoading, setIsLoading } = useContext(LoadingContext);

  useEffect(() => {
    // scroll to top before every page and start the fake loading
    window.scrollTo(0, 0);
    setIsLoading(true);

    // make it false to start the transaction and play the page
    const stopLoading = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(stopLoading);
  }, []);

  const transition = {
    transition: { duration: 1.5, type: 'tween' },
  };
  const LoaderSlices = [];
  for (let i = 0; i <= 7; i++) {
    const isEven = i % 2 === 0;
    LoaderSlices.push(
      <LoaderSlice
        key={i}
        exit={{ y: isEven ? '105vh' : '-105vh', ...transition }}
      />
    );
  }

  return (
    <AnimatePresence>
      {isLoading && (
        <LoaderContainer>
          <VisualContainer>
            <div className="logo-container">
              <Logo
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
                src="https://res.cloudinary.com/elsharbatly/image/upload/v1739102424/justice-matters/logo_gjc5to.png"
              />
            </div>
          </VisualContainer>
          {LoaderSlices}
        </LoaderContainer>
      )}
    </AnimatePresence>
  );
}

export default Loader;
