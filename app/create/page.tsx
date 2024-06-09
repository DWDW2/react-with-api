'use client'
import React, { useState } from 'react';
import axiosInstance from '@/app/api/AxiosIntstance';
import { usePosts } from '@/app/context/PostContext';

const NewPostForm = () => {
  const { addPost, posts } = usePosts();
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [tags, setTags] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const newPost = {
        id: posts.length+1, // Placeholder, will be set by backend
        title,
        body,
        tags: tags.split(',').map(tag => tag.trim()),
        reactions: {
          likes: 0,
          dislikes: 0
        },
        views: 0,
        userId: 1 // Assuming a static user ID for now
      };

      const response = await axiosInstance.post('/auth/posts/add', newPost);

      if (response.status === 201 || response.status === 200) {
        console.log('Created post:', response.data);
        addPost(response.data);
        setSuccess('Post created successfully!');
        setTitle('');
        setBody('');
        setTags('');
        setError(null);
      } else {
        throw new Error('Unexpected response status');
      }
    } catch (err) {
      console.error('Error creating post:', err);
      setError('Error creating post');
      setSuccess(null);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 flex items-center justify-center">
      <div className="bg-white dark:bg-gray-800 shadow-md rounded p-6 w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4">Create New Post</h1>
        {error && <div className="mb-4 text-red-500">{error}</div>}
        {success && <div className="mb-4 text-green-500">{success}</div>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-200 text-sm font-bold mb-2" htmlFor="title">
              Title
            </label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-200 bg-gray-200 dark:bg-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-200 text-sm font-bold mb-2" htmlFor="body">
              Body
            </label>
            <textarea
              id="body"
              value={body}
              onChange={(e) => setBody(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-200 bg-gray-200 dark:bg-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-200 text-sm font-bold mb-2" htmlFor="tags">
              Tags (comma separated)
            </label>
            <input
              type="text"
              id="tags"
              value={tags}
              onChange={(e) => setTags(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-200 bg-gray-200 dark:bg-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Create Post
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewPostForm;
