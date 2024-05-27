import { useCallback, useEffect, useState } from 'react';

interface UseMobileDetectInterface {
  isMobile: boolean;
}

export const useMobileScreenDetection = (): UseMobileDetectInterface => {
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);

  const handleWindowSizeChange = useCallback(() => {
    setWindowWidth(window.innerWidth);
  }, []);
  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);

    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    };
  }, [handleWindowSizeChange]);

  return { isMobile: windowWidth <= 768 };
};
