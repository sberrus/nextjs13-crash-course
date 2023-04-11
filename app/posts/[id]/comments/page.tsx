import Link from 'next/link'
import React from 'react'

interface IComment {
  postId: number
  id: number
  name: string
  email: string
  body: string
}

type CommentsPageProps = {
  params: any
}

const fetchPostComments = async (id: string) => {
  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`, {
    cache: 'no-store'
  }).then((res) => res.json())
}

const Comments = async ({ params }: CommentsPageProps) => {
  // obteniendo el param id
  const { id } = params
  const comments = (await fetchPostComments(id)) as IComment[]

  return (
    <>
      <ul style={{ listStyle: 'none' }}>
        {comments.map((comment) => (
          <li
            style={{ marginTop: '1rem', border: '1px solid #ad36ad', padding: '1rem', borderRadius: '8px' }}
            key={comment.id}
          >
            <h3>{comment.name}</h3>
            <small style={{ margin: '.5rem 0', display: 'inline-block', textDecoration: 'underline' }}>
              {comment.email}
            </small>
            <p>{comment.body}</p>
          </li>
        ))}
      </ul>
    </>
  )
}

export default Comments
