import { useEffect, useState } from 'react';

export interface SuggestionType {
  id: string;
  img: string;
  username: string;
}

const Suggestions = () => {
  const [suggestions, setSuggestions] = useState<SuggestionType[]>([]);
  useEffect(() => {
    const suggestions = [...Array(5)].map((_, i) => ({
      id: `${i}`,
      img: 'https://via.placeholder.com/56',
      username: `${i}`,
    }));
    setSuggestions(suggestions);
  }, []);
  return (
    <div className="mt-4">
      <div className="flex justify-between text-sm mb-5">
        <h3 className="text-sm font-bold text-gray-500">회원님을 위한 추천</h3>
        <button className="text-gray-600 font-semibold">모두 보기</button>
      </div>

      {suggestions.map((profile) => (
        <div key={profile.id} className="flex -items-center justify-between mt-3">
          <img src={profile.img} alt="" className="w-8 h-8 rounded-full  p-[2px]" />

          <div className="flex-1 ml-4">
            <h2 className="font-semibold text-sm">{profile.username}</h2>
            <p className="text-xs text-gray-400">Lorem ipsum dolor sit amet.</p>
          </div>

          <button className="text-xs text-blue-400 font-semibold">팔로우</button>
        </div>
      ))}
    </div>
  );
};

export default Suggestions;
