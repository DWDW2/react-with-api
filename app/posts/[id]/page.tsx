'use client'
import axiosInstance from '@/app/api/AxiosIntstance';
import React, { useState, useEffect } from 'react';

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

type Props = {
  params: { id: string }
};

const PostPage: React.FC<Props> = ({ params }) => {
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    axiosInstance.get(`/auth/posts/${params.id}`)
      .then(res => {
        setPost(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setError('Error fetching post');
        setLoading(false);
      });
  }, [params.id]);

  if (loading) {
    return <div className="flex justify-center items-center h-screen">Loading...</div>;
  }

  if (error) {
    return <div className="flex justify-center items-center h-screen">{error}</div>;
  }

  return (
    <div className={`${isDarkMode ? 'dark' : ''}`}>
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
        <div className="container mx-auto p-6">
          {post && (
            <div className="bg-white dark:bg-gray-800 shadow-md rounded p-6">
              <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
              <p className="mb-4">{post.body}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {post.tags.map(tag => (
                  <span key={tag} className="bg-blue-200 dark:bg-blue-500 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <span className="mr-4">Likes: {post.reactions.likes}</span>
                  <span>Dislikes: {post.reactions.dislikes}</span>
                </div>
                <div>Views: {post.views}</div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PostPage;
