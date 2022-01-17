import { useEffect, useState } from 'react';
import Login from './Login';

import InstaIcon from '/assets/images/instaIcon.svg';

const Index = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 800);
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="w-screen h-screen bg-white">
          <InstaIcon />
          <p className="sr-only">로딩중</p>
        </div>
      ) : (
        <Login />
      )}
    </>
  );
};

export default Index;
