'use client'
import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import axiosInstance from '@/app/api/AxiosIntstance';

export type Post = {
  id: number,
  title: string,
  body: string,
  tags: string[],
  reactions: {
    likes: number,
    dislikes: number
  },
  views: number,
  userId: number
};

interface PostContextType {
  posts: Post[];
  fetchPosts: () => void;
  addPost: (newPost: Post) => void;
  updatePost: (updatedPost: Post) => void;
  deletePost: (postId: number) => void;
}

const PostContext = createContext<PostContextType | undefined>(undefined);

export const PostProvider = ({ children }: { children: ReactNode }) => {
  const [posts, setPosts] = useState<Post[]>([]);

  // Save posts to localStorage
  const savePostsToLocalStorage = (posts: Post[]) => {
    localStorage.setItem('posts', JSON.stringify(posts));
  };

  // Load posts from localStorage
  const loadPostsFromLocalStorage = () => {
    const storedPosts = localStorage.getItem('posts');
    if (storedPosts) {
      return JSON.parse(storedPosts);
    }
    return [];
  };

  const fetchPosts = async () => {
    try {
      const response = await axiosInstance.get('/auth/posts');
      setPosts(response.data.posts);
      savePostsToLocalStorage(response.data.posts);
    } catch (error) {
      console.error('Error fetching posts', error);
    }
  };

  const addPost = (newPost: Post) => {
    setPosts((prevPosts) => {
      const updatedPosts = [...prevPosts, newPost];
      savePostsToLocalStorage(updatedPosts);
      return updatedPosts;
    });
  };

  const updatePost = (updatedPost: Post) => {
    setPosts((prevPosts) => {
      const updatedPosts = prevPosts.map(post => post.id === updatedPost.id ? updatedPost : post);
      savePostsToLocalStorage(updatedPosts);
      return updatedPosts;
    });
  };

  const deletePost = (postId: number) => {
    setPosts((prevPosts) => {
      const updatedPosts = prevPosts.filter(post => post.id !== postId);
      savePostsToLocalStorage(updatedPosts);
      return updatedPosts;
    });
  };

  useEffect(() => {
    const storedPosts = loadPostsFromLocalStorage();
    if (storedPosts.length > 0) {
      setPosts(storedPosts);
    } else {
      if (sessionStorage.getItem('Data token')!== null){
        fetchPosts();
      }
    }
  }, []);

  return (
    <PostContext.Provider value={{ posts, fetchPosts, addPost, updatePost, deletePost }}>
      {children}
    </PostContext.Provider>
  );
};

export const usePosts = (): PostContextType => {
  const context = useContext(PostContext);
  if (context === undefined) {
    throw new Error('usePosts must be used within a PostProvider');
  }
  return context;
};
