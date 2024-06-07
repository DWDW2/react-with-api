'use client'
import * as React from 'react';
import axios from 'axios';
import Post from '../../components/Post';
import { parseArgs } from 'util';
export interface IAppProps {
  params: {id: string}
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


async function fetchData(): Promise<DataPost> {
  const response = await axios.get('https://dummyjson.com/posts');
  const data: DataPost = response.data;
  console.log(data);
  return data;
}

export default function App(params: IAppProps) {
  const [data, setData] = React.useState<DataArr | null>(null);

  React.useEffect(() => {
    fetchData().then((data) => setData(data.posts));
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  };


  return (
      data && data.map((post: Data) => {
        if(post.id === Number(params.params.id))
        return (<Post key={post.id} title={post.title} body={post.body} tags={post.tags} link={'/'}/>)
      }),
    );
  }
