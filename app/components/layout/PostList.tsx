'use client'
import Link from 'next/link';
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
  
  const getPostsFromLocalStorage = (): Post[] => {
    const storedPosts = localStorage.getItem('posts');
    return storedPosts ? JSON.parse(storedPosts) : [];
  };
  
  const savePostsToLocalStorage = (posts: Post[]) => {
    localStorage.setItem('posts', JSON.stringify(posts));
  };
  

const PostList: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [isEditing, setIsEditing] = useState<number | null>(null);
  const [editedPost, setEditedPost] = useState<Post | null>(null);

  useEffect(() => {
    setPosts(getPostsFromLocalStorage());
  }, []);

  const handleEdit = (post: Post) => {
    setIsEditing(post.id);
    setEditedPost(post);
  };

  const handleCancel = () => {
    setIsEditing(null);
    setEditedPost(null);
  };

  const handleSave = () => {
    if (editedPost) {
      const updatedPosts = posts.map(post => post.id === editedPost.id ? editedPost : post);
      setPosts(updatedPosts);
      savePostsToLocalStorage(updatedPosts);
      setIsEditing(null);
      setEditedPost(null);
    }
  };

  const handleDelete = (postId: number) => {
    const updatedPosts = posts.filter(post => post.id !== postId);
    setPosts(updatedPosts);
    savePostsToLocalStorage(updatedPosts);
  };

  return (
    <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-full gap-4">
      {posts.map(post => (
        <div key={post.id} className="p-4 bg-slate-400 dark:bg-gray-800 rounded-lg shadow-md mb-4 w-[100%] mr-2 ml-2">
          {isEditing === post.id ? (
            <div className='dark:bg-slate-800'>
                <img className="h-48 w-full object-cover mb-10" src="data:image/png;base64,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" alt="Ted talk"/> 
              <input
                type="text" 
                value={editedPost?.title || ''}
                onChange={(e) => setEditedPost({ ...editedPost!, title: e.target.value })}
                className="w-full p-2 mb-2 border rounded"
              />
              <textarea
                value={editedPost?.body || ''}
                onChange={(e) => setEditedPost({ ...editedPost!, body: e.target.value })}
                className="w-full p-2 mb-2 border rounded"
              />
              <button onClick={handleSave} className="mr-2 p-2 bg-blue-500 text-white rounded">Save</button>
              <button onClick={handleCancel} className="p-2 bg-gray-500 text-white rounded">Cancel</button>
            </div>
          ) : (
            <div className='dark:bg-slate-800'>
                <Link href={`/posts/${post.id}`}>
                <img className="h-48 w-full object-cover" src="data:image/png;base64,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" alt="Ted talk"/> 
                <h3 className="text-xl font-bold">{post.title}</h3>
                <p>{post.body}</p>
                </Link>
                <button onClick={() => handleEdit(post)} className="mr-2 p-2 bg-yellow-500 text-white rounded">Edit</button>
                <button onClick={() => handleDelete(post.id)} className="p-2 bg-red-500 text-white rounded">Delete</button>
                </div>  
          )}
        </div>
      ))}
    </div>
  );
};

export default PostList;
