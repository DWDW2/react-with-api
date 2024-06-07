'use client'
import React, { useContext, useEffect } from 'react';
import { UserContext } from './context/Usercontext'; // Adjust the path accordingly

const MyComponent: React.FC = () => {
  const userContext = useContext(UserContext);
  
  if (!userContext) {
    return <div>Loading...</div>;
  }

  const { posts, savePosts, fetchData } = userContext;
  useEffect(() => {
    fetchData().then((data) => savePosts(data));
  }, [])
  // Example usage
  const addPost = () => {
    const newPost = {
      id: 1,
      title: 'New Post',
      body: 'This is a new post',
      tags: ['tag1'],
      reactions: {},
      views: 0,
      userId: 1
    };
    savePosts(newPost);
  };

  return (
    <div>
      <button onClick={addPost}>Add Post</button>
      <div>
        {posts.map(post => (
          <div key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MyComponent;
