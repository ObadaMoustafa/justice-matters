import { createContext, useEffect, useState } from 'react';
export const WindowContext = createContext();
const WindowContextProvider = ({ children }) => {
  const getDevice = (num) => {
    if (num < 450) return 'mobile';
    if (num < 800) return 'tablet';
    else return 'pc';
  };
  const [device, setDevise] = useState(getDevice(innerWidth));
  const [isMobile, setIsMobile] = useState(innerWidth < 800);
  useEffect(() => {
    window.addEventListener('resize', () => {
      setDevise(getDevice(innerWidth));
      setIsMobile(innerWidth < 800);
    });

    return () => removeEventListener('resize', window);
  }, []);

  const sharedValues = { device, isMobile };

  return (
    <WindowContext.Provider value={sharedValues}>
      {children}
    </WindowContext.Provider>
  );
};

export default WindowContextProvider;
