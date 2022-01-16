import { useEffect, useState } from 'react';
import Slider from '../../../components/Slider';
import Story from './Story';

export interface StoryType {
  id: string;
  img: string;
  username: string;
}

const Stories = () => {
  const [suggestions, setSuggestions] = useState<StoryType[]>([]);
  useEffect(() => {
    const suggestions = [...Array(20)].map((_, i) => ({
      id: `${i}`,
      img: 'https://via.placeholder.com/56',
      username: `${i}`,
    }));
    setSuggestions(suggestions);
  }, []);
  return (
    <div className="flex space-x-2 pr-0 p-5 bg-white mt-8 border-gray-200 border rounded-sm overflow-x-scroll scrollbar-thin scrollbar-thumb-black">
      <Slider slidesToShow={8} swipeNum={5} speed={10}>
        {suggestions.map((profile) => (
          <Story key={profile.id} img={profile.img} username={profile.username} />
        ))}
      </Slider>
    </div>
  );
};

export default Stories;
