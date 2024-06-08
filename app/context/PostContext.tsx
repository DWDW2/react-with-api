'use client'
import React, { Dispatch, ReactNode, SetStateAction } from 'react';

type Post = {
  id: number,
  title: string,
  body: string,
  tags: string[],
  reactions: {
    likes: number,
    dislikes: number
  },
  views: number,
  userId: number, 
}

interface PostContextType {
  post: Post;
  setPost: Dispatch<SetStateAction<Post>>;
}

const defaultPost = {
  post: {id: 1,
  title: "His mother had always taught him",
  body: "His mother had always taught him not to ever think of himself as better than others. He'd tried to live by this motto. He never looked down on those who were less fortunate or who had less money than him. But the stupidity of the group of people he was talking to made him change his mind.",
  tags: [
    "history",
    "american",
    "crime"
  ],
  reactions: {
    likes: 192,
    dislikes: 25
  },
  views: 305,
  userId: 121},
  setPost: (post: Post) => {}
} as PostContextType;

export const PostContext = React.createContext(defaultPost);

type PostProviderProps = {
  children: ReactNode,
}

const PostProvider = ({ children } : PostProviderProps) => {
  const [post, setPost] = React.useState<Post>(defaultPost.post)
  return (
    <PostContext.Provider value={{post , setPost}}>
      {children}
    </PostContext.Provider>
  );
};

export default PostProvider 
