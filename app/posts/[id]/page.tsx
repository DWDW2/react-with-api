import React from 'react'

type Props = {
    params: {id: string}
}

export default function PostID({params}: Props) {
    console.log(params)
  return (
    <div>{params.id}</div>
  )
}