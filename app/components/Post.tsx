import React from 'react'
import Link from 'next/link'
type Props = {
    title: string,
    body: string,
    tags: string[],
    link: string
}

export default function Post({title, body, tags, link}: Props) {
  return (
    <div className='flex items-center justify-center mb-5 mt-5'>
       
            <div className="rounded-xl border p-5 shadow-md w-9/12 bg-white">
            <div className="flex w-full items-center justify-between border-b pb-3">
            <div className="flex items-center space-x-8">
                {
                    tags.map((tag) => {
                        return (
                            <div className="text-xs text-neutral-500 mr-2"><button className="rounded-2xl border bg-neutral-100 px-5 py-2 text-xs font-semibold">{tag}</button></div>
                        )
                    })
                }
                
            </div>
            </div>

            <div className="mt-4 mb-6">
            <Link href={link}>
                    <div className="mb-3 text-xl font-bold">{title}</div>
            </Link>
            <div className="text-sm text-neutral-600">{body}</div>
            </div>

            <div>
            
            </div>
    </div>
    </div>
  )
}