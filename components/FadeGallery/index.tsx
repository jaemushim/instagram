import React, { FC, useEffect, useState } from 'react';

interface IProps {
  children?: React.ReactNode;
}

const FadeGallery: FC<IProps> = ({ children }) => {
  const [imgNum, setImgNum] = useState<number>(0);
  const [count, setCount] = useState<number>(0);
  const [intervalId, setIntervalId] = useState<ReturnType<typeof setInterval>>();

  useEffect(() => {
    if (children) {
      setImgNum(Object.keys(children).length);
    }
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (count < 4) {
        setCount((num) => num + 1);
      } else {
        setCount(0);
      }
    }, 3000);
    setIntervalId(intervalId);

    return () => clearInterval(intervalId as ReturnType<typeof setInterval>);
  }, [count]);

  console.log(`count`, count);
  return (
    <div className="w-full h-full">
      {React.Children.map(children, (child: any, index) => {
        return (
          <>
            <div className="absolute">
              <div className={`${count === index ? 'opacity-100' : ''} opacity-0 fadeinout`}>
                {React.cloneElement(child as React.ReactElement)}
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default FadeGallery;
