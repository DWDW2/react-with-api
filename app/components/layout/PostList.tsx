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

// Function to retrieve posts from a backend or API instead of localStorage
const getPostsFromBackend = async (): Promise<Post[]> => {
  // Implement logic to fetch posts from your backend or API
  return []; // Placeholder
};

const PostList: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [isEditing, setIsEditing] = useState<number | null>(null);
  const [editedPost, setEditedPost] = useState<Post | null>(null);

  useEffect(() => {
    // Use an effect to fetch posts when the component mounts
    async function fetchPosts() {
      const fetchedPosts = await getPostsFromBackend();
      setPosts(fetchedPosts);
    }
    fetchPosts();
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
      // Consider saving changes to backend/database instead of localStorage
      setIsEditing(null);
      setEditedPost(null);
    }
  };

  const handleDelete = (postId: number) => {
    const updatedPosts = posts.filter(post => post.id !== postId);
    setPosts(updatedPosts);
    // Consider deleting post from backend/database instead of localStorage
  };

  return (
    <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-full gap-4">
      {posts.map(post => (
        <div key={post.id} className="p-4 bg-slate-400 dark:bg-gray-800 rounded-lg shadow-md mb-4 w-[100%] mr-2 ml-2">
          <div className='dark:bg-slate-800'>
            <Link href={`/posts/${post.id}`}>
              <img className="h-48 w-full object-cover" src='/placeholder.jpg' alt="Placeholder"/> {/* Provide a placeholder image */}
              <h3 className="text-xl font-bold">{post.title}</h3>
              <p>{post.body}</p>
            </Link>
            <button onClick={() => handleEdit(post)} className="mr-2 p-2 bg-yellow-500 text-white rounded">Edit</button>
            <button onClick={() => handleDelete(post.id)} className="p-2 bg-red-500 text-white rounded">Delete</button>
          </div>  
        </div>
      ))}
    </div>
  );
};

export default PostList;
