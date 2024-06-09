'use client'
import React, { useState } from 'react';

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
    userId: number
  };
  
  const getPostsFromLocalStorage = (): Post[] => {
    const storedPosts = localStorage.getItem('posts');
    return storedPosts ? JSON.parse(storedPosts) : [];
  };
  
  const savePostsToLocalStorage = (posts: Post[]) => {
    localStorage.setItem('posts', JSON.stringify(posts));
  };
  

const AddPost: React.FC = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [posts, setPosts] = useState<Post[]>(getPostsFromLocalStorage());

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newPost = {
      id: posts[posts.length-1].id+1, // Generate a unique ID
      title,
      body,
      tags: [],
      reactions: { likes: 0, dislikes: 0 },
      views: 0,
      userId: 1 // Assuming a static userId for now
    };
    const updatedPosts = [...posts, newPost];
    setPosts(updatedPosts);
    savePostsToLocalStorage(updatedPosts);
    setTitle('');
    setBody('');
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-slate-400 dark:bg-gray-800 rounded-lg shadow-md mb-4">
      <h2 className="text-xl font-bold mb-2">Add New Post</h2>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        className="w-full p-2 mb-2 border rounded"
      />
      <textarea
        value={body}
        onChange={(e) => setBody(e.target.value)}
        placeholder="Body"
        className="w-full p-2 mb-2 border rounded"
      />
      <button type="submit" className="p-2 bg-blue-500 text-white rounded">Add Post</button>
    </form>
  );
};

export default AddPost;
