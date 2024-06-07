import React, { createContext, useState, useContext, useEffect } from 'react';
import fetchData from '../api/getData';
type Props = {}

type DataPost = {
  posts : Array<Post>,
  total: number,
  skip: number,
  limit: number
}

type Post = {
  id: number,
  title: string,
  body: string,
  tags: string[],
  reactions: object,
  views: number,
  userId: number
}

type DataArr = Array<Post>

type UserContextType = {
  posts: DataArr;
  savePost: (post: Post) => void;
  updatePost: (id: number, body: string, title: string) => void;
  fetchData: () => Promise<DataPost>;
  savePosts: (posts: DataArr) => void;
}

export const UserContext = createContext<UserContextType | null>(null);

const UserContextProvider: React.FC<{children: React.ReactNode}> = ({children}) => {
  const [posts, setPosts] = useState<DataArr>([]);


  const savePosts = (posts: DataArr) => {
    setPosts(posts);
  }
  

  const savePost = (post: Post) => {
    const newPost: Post = {
      id: post.id,
      title: post.title,
      body: post.body,
      tags: post.tags,
      reactions: post.reactions,
      userId: post.userId,
      views: post.views,
    };
    setPosts(prevPosts => [...prevPosts, newPost]);
  }

  const updatePost = (id: number, body: string, title: string) => {
    setPosts(prevPosts => prevPosts.map(post => 
      post.id === id ? { ...post, body: body || post.body, title: title || post.title } : post
    ));
  };

  return (
    <UserContext.Provider value={{ posts, savePost, updatePost, fetchData, savePosts}}>
      {children}
    </UserContext.Provider>
  );
}

export default UserContextProvider;
