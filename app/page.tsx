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
  const { logout } = useAuth();
  const [data, setData] = useState<Data>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  instance.interceptors.request.use(
    (config) => {
      //import token from local storage
      let token=localStorage.getItem('token') || '';
      //configuring header
      config.headers = {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`, //based on your project requirement
        //or
        "x-token" : JSON.parse(token), //based on your project requirement
        params:{*params*},  //based on your project requirement
        version: packageJson.version, //based on your project requirement
       //other optional headers like Accept-Encoding, Accept-Language or any custom key values like project details.
      };
  
      return config;
    },
    (error) => Promise.reject(error),
  );
  return (
      <div className="App">
        <button onClick={() => logout()} >Logout</button>
      </div>
  );
}
export default App;

