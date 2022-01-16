import React, { MutableRefObject, Ref } from 'react';
import { useRef, useState, useEffect, FC } from 'react';

interface IProps {
  slidesToShow?: number;
  speed?: number;
  swipeNum?: number;
  className?: string;
}

const Slider: FC<IProps> = ({ slidesToShow = 1, speed = 15, swipeNum = 4, className, children }) => {
  // any 없애기
  const slider = useRef<any>(null);
  const wrapper = useRef<any>(null);

  const [wrapperWidth, setWrapperWidth] = useState<string>('');
  const [slideWidth, setSlideWidth] = useState<number>(0);
  const [slidesNum, setSlidesNum] = useState<number>();
  const [isLeftNavShow, setIsLeftNavShow] = useState<boolean>(false);
  const [isRightNavShow, setIsRightNavShow] = useState<boolean>(true);

  // set wrapper width
  useEffect(() => {
    const slidesNum = wrapper.current?.childElementCount;
    setSlidesNum(slidesNum);
    const width = `${slidesNum * (wrapper.current?.childNodes[0]?.clientWidth + 1)}px`;
    setWrapperWidth(width);
  }, [children]);

  // set slide width by slidesToShow prop
  useEffect(() => {
    const width = (slider.current?.clientWidth - 1) / slidesToShow;
    setSlideWidth(width);
  }, [children]);

  function transition(
    el: React.MutableRefObject<HTMLDivElement>,
    from: number,
    to: number,
    dir: 'left' | 'right',
    cb: any,
  ) {
    let inc = from;
    let interval = setInterval(() => {
      if (inc >= to - speed) {
        clearInterval(interval);
        cb();
      }
      el.current.scrollLeft = dir === 'right' ? el.current?.scrollLeft + speed : el.current.scrollLeft - speed;
      inc += speed;
    }, 10);
  }

  const handleLeftNav = () => {
    setIsRightNavShow(true);
    transition(slider, 0, slideWidth * swipeNum, 'left', () => {
      if (slider.current?.scrollLeft === 0) setIsLeftNavShow(false);
    });
  };
  const handleRightNav = () => {
    setIsLeftNavShow(true);
    transition(slider, 0, slideWidth * swipeNum, 'right', () => {
      if (slider.current.scrollLeft + 1 >= wrapper.current.clientWidth - slider.current.clientWidth)
        setIsRightNavShow(false);
    });
  };

  useEffect(() => {
    function handleResize() {
      setWrapperWidth(`${slidesNum} * ${slideWidth}px`);
    }

    window.addEventListener('resize', handleResize);
  });

  const wrapperStyle = { width: wrapperWidth, visibility: wrapperWidth && 'visible' } as React.CSSProperties;

  return (
    <div className={`slider-wrapper ${className}`}>
      <div ref={slider} className="slider items">
        <div ref={wrapper} className="wrapper" style={wrapperStyle}>
          {React.Children.map(children, (child: any) => {
            return (
              <>
                <div style={{ width: slideWidth }}>{React.cloneElement(child as React.ReactElement)}</div>
              </>
            );
          })}
        </div>
      </div>
      <nav>
        <button className={`left ${!isLeftNavShow && 'disabled'}`} role="button" onClick={handleLeftNav}>
          <i className="fas fa-chevron-left"></i>
        </button>
        <button className={`right ${!isRightNavShow && 'disabled'}`} role="button" onClick={handleRightNav}>
          <i className="fas fa-chevron-right"></i>
        </button>
      </nav>
    </div>
  );
};

export default Slider;
