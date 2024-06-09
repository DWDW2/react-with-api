'use client'
import React from 'react';
import AddPost from '@/app/components/AddPost';
import PostList from '@/app/components/layout/PostList';

const MainPage: React.FC = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Posts</h1>
      <AddPost />
      <PostList />
    </div>
  );
};

export default MainPage;
