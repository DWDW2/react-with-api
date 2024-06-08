'use client'
import { useAuth } from "./context/AuthContext";
import { GetPosts } from "./api/AxiosAuthFunc";
import { useEffect, useState } from "react";
import axios from "axios";
type Data = {
  id: number;
  title: string;
  body: string;
  tags: string[];
  reactions: {likes: number, dislikes: number};
  views: number;
  userId: 121;
}
function App() {
  const { token, refresh, logout } = useAuth();
  const [data, setData] = useState<Data>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  console.log(token, `refresh  : ${refresh}`)
  axios({
    method: 'GET', 
    url: 'https://dummyjson.com/auth/posts',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    }
  })
  .then(response => {
    return console.log(response.data.posts);
  })
  .catch(error => {
    console.error(error);
  });
  return (
      <div className="App">
        <button onClick={() => logout()} >Logout</button>
      </div>
  );
}
export default App;

