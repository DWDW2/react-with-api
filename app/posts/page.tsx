'use client'
import React, { useEffect } from 'react';
import { usePosts } from '@/app/context/PostContext';
import  Media  from '../components/layout/SkeletonFrame';
import NewPostForm from '../create/page';
import { useRouter } from 'next/navigation';

const Posts = () => {
  const { posts } = usePosts();  

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 flex items-center justify-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 ml-3 mr-3 md:grid-cols-3">
        {posts.map((post, index) => (
          <Media 
            key={index}
            title={post.title}
            desc={post.body}
            img="data:image/png;base64,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"
            link={`/posts/${post.id}`} // Use an actual image URL or a placeholder
          />
        ))}
      </div>
    </div>
  );
};

export default Posts;
