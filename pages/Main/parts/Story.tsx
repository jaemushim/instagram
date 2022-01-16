import { StoryType } from './Stories';

const Story = ({ img, username }: Omit<StoryType, 'id'>) => {
  return (
    <div>
      <img
        className="w-14 h-14 rounded-full p-[1.5px] border-red-500 border-2 object-contain cursor-pointer"
        src={img}
        alt=""
      />
      <p className="w-14 mt-2 truncate text-center text-xs">{username}</p>
    </div>
  );
};

export default Story;
