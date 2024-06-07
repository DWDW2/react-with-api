import { link } from 'fs'
import Link from 'next/link'
import React from 'react'

type Props = {
    link: string,
}

export default function Navbar({link}: Props) {
  return (
    <div className='flex h-2 bg-white justify-between p-5 mb-10'>
        <div className='font-mono text-bold text-lg'>
            Nfac-articles
        </div>
        <ul className='flex flex-row gap-5'>
            <Link href='/'> 
                <li>Home</li>
            </Link>
            <Link href='/about'> 
                <li>About</li>
            </Link>
            <Link href='/posts'> 
                <li>Posts</li>
            </Link>
            <Link href='/faq'> 
                <li>FAQ</li>
            </Link>
        </ul> 
    </div>
  )
}