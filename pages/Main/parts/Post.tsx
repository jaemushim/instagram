import { useCallback, useEffect, useState } from 'react';
import { PostType, CaptionType } from './Posts';
import DotsHorizontalIcon from '@images/dotsHorizontal.svg';
import HeartIcon from '@images/heart.svg';
import HeartFilledIcon from '@images/heartFilled.svg';
import PaperPlaneIcon from '@images/paperPlane.svg';
import ChatIcon from '@images/chat.svg';
import BookMarkIcon from '@images/bookMark.svg';
import EmojiHappyIcon from '@images/emojiHappy.svg';

const Post = ({ id, username, userImg, img, captions }: PostType) => {
  const [isLikeSelect, setIsLikeSelect] = useState<boolean>();
  const [likeSum, setLikeSum] = useState<number>(0);
  const [comment, setComment] = useState<string>('');

  const handleLikeButton = (e: React.MouseEvent<HTMLButtonElement>) => {
    setIsLikeSelect(!isLikeSelect);
    if (isLikeSelect) {
      setLikeSum((num) => num - 1);
    } else {
      setLikeSum((num) => num + 1);
    }
  };

  const handleComment = useCallback(
    (e) => {
      setComment(e.target.value);
    },
    [comment],
  );

  const handleSubmit = useCallback(
    (e: React.MouseEvent<HTMLFormElement>) => {
      e.preventDefault();
      captions.push({ id: 'unique', username: 'username', text: comment });
      setComment('');
    },
    [comment],
  );

  return (
    <article className="bg-white my-7 border rounded-sm">
      <header className="flex items-center p-3.5">
        <img src={userImg} className="rounded-full h-8 w-8 object-contain mr-4" alt="" />
        <p className="flex-1 font-bold">{username}</p>
        <DotsHorizontalIcon className="h-5" />
      </header>
      {/* img */}
      <img src={img} className="object-cover w-full" alt="" />
      {/* buttons */}
      <div className="flex justify-between px-4 pt-4">
        <div className="flex space-x-4">
          <button type="button" onClick={handleLikeButton}>
            {!isLikeSelect && <HeartIcon className="btn-icon" />}
            {isLikeSelect && <HeartFilledIcon className="btn-icon like-button-animation" />}
          </button>
          <button type="button">
            <ChatIcon className="btn-icon" />
          </button>
          <button type="button">
            <PaperPlaneIcon className="btn-icon" />
          </button>
        </div>
        <button type="button">
          <BookMarkIcon className="btn-icon" />
        </button>
      </div>
      {/* like */}
      <div className="px-4 pt-2 mb-1 text-sm font-semibold">좋아요 {likeSum}개</div>
      {/* caption */}
      <div>
        <div className="px-4 pt-1.5 pb-3 truncate">
          {captions.map((item: CaptionType, index: number) => {
            return (
              <div key={index} className="text-sm">
                <span className="font-semibold mr-1.5">{item.username}</span>
                {item.text}
              </div>
            );
          })}
        </div>
      </div>
      {/* input box */}
      <form onSubmit={handleSubmit} className="flex items-center py-2 px-4 border-t border-gray-200">
        <EmojiHappyIcon />
        <input
          type="text"
          name="comment"
          value={comment}
          onChange={handleComment}
          placeholder="댓글 달기..."
          className="border-none flex-1 focus:ring-0 outline-none placeholder:text-sm pl-4"
        />
        <button
          type="submit"
          className={`${!comment && 'pointer-events-none opacity-40'} font-semibold text-blue-500 text-sm`}
        >
          게시
        </button>
      </form>
    </article>
  );
};

export default Post;
