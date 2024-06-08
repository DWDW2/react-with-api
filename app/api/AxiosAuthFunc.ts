import axios from "axios";

export const GetPosts = (token: string) => {
    axios({
      method: 'GET', 
      url: 'https://dummyjson.com/auth/posts',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    })
    .then(response => {
      return response.data.posts;
    })
    .catch(error => {
      console.error(error);
    });
}