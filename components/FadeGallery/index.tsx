import React, { FC, useEffect, useState } from 'react';

interface IProps {
  duration?: number;
  children?: React.ReactNode;
}

const FadeGallery: FC<IProps> = ({ duration = 5, children }) => {
  const [imgNum, setImgNum] = useState<number>(0);
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    if (children) {
      setImgNum(Object.keys(children).length);
    }
  }, [children]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (count < imgNum - 1) {
        setCount((num) => num + 1);
      } else {
        setCount(0);
      }
    }, duration * 1000);

    return () => clearInterval(intervalId as ReturnType<typeof setInterval>);
  }, [count, imgNum]);

  return (
    <div className="w-full h-full">
      {React.Children.map(children, (child, index: number) => {
        return (
          <>
            <div className="absolute">
              <div className={`test ${count === index ? 'opacity-100' : 'opacity-0'} fadeinout`}>
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
