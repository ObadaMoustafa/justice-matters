import { createContext, useState } from 'react';
export const LoadingContext = createContext();
const LoadingContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const sharedValues = { isLoading, setIsLoading };

  return (
    <LoadingContext.Provider value={sharedValues}>
      {children}
    </LoadingContext.Provider>
  );
};

export default LoadingContextProvider;
