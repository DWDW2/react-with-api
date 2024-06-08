'use client'
import Post from '@/app/components/Post'
import axios from 'axios'
import React from 'react'
import { Skeleton } from '@mui/material'

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


type Props = {
    params: {id: string}
}

async function fetchData(): Promise<DataPost> {
  const response = await axios.get('https://dummyjson.com/posts');
  const data: DataPost = response.data;
  console.log(data);
  return data;
}

export default function PostID({params}: Props) {
  const [data, setData] = React.useState<DataArr | null>(null);

    React.useEffect(() => {
      fetchData().then((data) => setData(data.posts));
    }, []);
  
    if (!data) {
      return (
        <div> 
          <Skeleton height={200} className='w-[70%] mr-auto ml-auto'/>
          <Skeleton height={200} className='w-[70%] mr-auto ml-auto'/>
          <Skeleton height={200} className='w-[70%] mr-auto ml-auto'/>
          <Skeleton height={200} className='w-[70%] mr-auto ml-auto'/>
          <Skeleton height={200} className='w-[70%] mr-auto ml-auto'/>
        </div>)
    };
  return (
    data && data.map((post: Data) => {
      if (post.id === Number(params.id))
      return (
        <div className='flex flex-col w-[80%] mr-auto ml-auto'>
          <h1 className='text-bold text-[64px] font-bold'>
            {post.title}
          </h1>
          <p className='w-[70%] text-[24px]'>
            {post.body}
          </p>
          <div className='flex flex-row gap-4 mt-4'>
          {
            post.tags.map((tag, i) => {
              return (
            
                  <div className="text-xs text-neutral-500 mr-2">
                    <button className="rounded-2xl border bg-neutral-100 px-5 py-2 text-xs font-semibold" key={i}>
                      {tag}
                    </button>
                  </div>
          
              )
            })
          }
          </div>
        </div>
      )
    })
  )
}