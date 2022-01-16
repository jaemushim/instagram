import Post from './Post';

export interface PostType {
  id: string;
  username: string;
  userImg: string;
  img: string;
  captions: CaptionType[];
}

export interface CaptionType {
  id: string;
  username: string;
  text: string;
}

const posts: PostType[] = [
  {
    id: '1',
    username: 'jaemu',
    userImg: 'https://via.placeholder.com/56',
    img: 'https://via.placeholder.com/400',
    captions: [{ id: 'c1', username: '사용자1', text: '댓글1' }],
  },
  {
    id: '2',
    username: 'jaemu',
    userImg: 'https://via.placeholder.com/56',
    img: 'https://via.placeholder.com/400',
    captions: [
      { id: 'c2', username: '사용자1', text: '댓글1' },
      { id: 'c3', username: '사용자2', text: '댓글2' },
      { id: 'c4', username: '사용자3', text: '댓글3' },
    ],
  },
];

const Posts = () => {
  return (
    <div>
      {posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          username={post.username}
          userImg={post.userImg}
          img={post.img}
          captions={post.captions}
        />
      ))}
    </div>
  );
};

export default Posts;
