import Image from 'next/image';
import LogoImg from '@images/logo.png';
import SearchIcon from '@images/search.svg';
import HomeIcon from '@images/home.svg';
import PaperPlaneIcon from '@images/paperPlane.svg';
import PlusCircleIcon from '@images/plusCircle.svg';
import CompassIcon from '@images/compass.svg';
import HeartIcon from '@images/heart.svg';

const Header = () => {
  return (
    <div className="shadow-sm border-b bg-white sticky top-0 z-10">
      <div className="flex justify-between items-center max-w-[935px] mx-5 lg:mx-auto h-15">
        {/* Left */}
        <div className="mt-3">
          <Image src={LogoImg} />
        </div>
        {/* Middle - Search */}
        <div className="max-w-xm hidden sm:block">
          <div className="relative xl:ml-48 p-3 rounded-md">
            <div className="absolute inset-y-0 pl-4 flex items-center pointer-events-none">
              <SearchIcon />
            </div>
            <input
              type="text"
              className="block w-64 bg-ef pl-11 border-none sm:text-sm rounded-lg focus:ring-black focus:border-black placeholder:text-base placeholder:font-light"
              placeholder="검색"
            />
          </div>
        </div>
        {/* Right */}
        <div className="flex items-center space-x-6">
          <HomeIcon className="navBtn" />
          <div className="relative">
            <PaperPlaneIcon className="navBtn" />
            <div className="absolute -top-2 -right-2 text-center text-xs w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white">
              3
            </div>
          </div>
          <PlusCircleIcon className="navBtn" />
          <CompassIcon className="navBtn" />
          <HeartIcon className="navBtn" />
          <img src="https://via.placeholder.com/24" className="rounded-full cursor-pointer" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Header;
