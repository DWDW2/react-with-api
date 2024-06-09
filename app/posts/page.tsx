'use client'
import axiosInstance from '@/app/api/AxiosIntstance';
import React, { useState, useEffect, useMemo } from 'react';
import Media from '../components/layout/SkeletonFrame';
import Link from 'next/link'
type Props = {
    params: { id: string }
};

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

export default function Posts({ params }: Props) {
    const [data, setData] = useState<Post[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        axiosInstance.get('/auth/posts')
            .then(res => {
                setData(res.data.posts);
                setLoading(false);
            })
            .catch(err => {
                console.error(err);
                setError('Error fetching posts');
                setLoading(false);
            });
    }, []);

    const memoizedData = useMemo(() => data, [data]);

    if (loading) {
        return  (<div className='grid grid-cols-1 sm:grid-cols-3 ml-3 mr-3'>
                        <Media link={'/'} loading={loading}/>
                        <Media link={'/'} loading={loading}/>
                        <Media link={'/'} loading={loading}/>
                        <Media link={'/'} loading={loading}/>
                        <Media link={'/'} loading={loading}/>
                        <Media link={'/'} loading={loading}/>
                </div>);
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div className='grid grid-cols-1 sm:grid-cols-3 ml-3 mr-3'>
            {memoizedData.map(post => (
                <Media 
                    key={post.id}
                    title={post.title}
                    desc={post.body}
                    img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9d_oPUAVuZ19kLfp4u8k2RHjQNk51jDrRcw&s"
                    link={`posts/${post.id}`} // Use an actual image URL or a placeholder
                />
            ))}
        </div>
    );
}
