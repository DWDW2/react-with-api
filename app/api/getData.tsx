import * as React from 'react';
import axios from 'axios';
import Post from '../components/Post';
export interface IAppProps {
}

type DataPost = {
  posts : Array<Data>,
  total: number,
  skip: number,
  limit: number
}

type Data = {
  id: number,
  title: string,
  body: string,
  tags: string[],
  reactions: object,
  views: number,
  userId: number
}

type DataArr = Array<Data>


export default async function fetchData(): Promise<DataPost> {
  const response = await axios.get('https://dummyjson.com/posts');
  const data: DataPost = response.data;
  console.log(data);
  return data;
}
