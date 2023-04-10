import React from 'react'
import LikeButton from './LikeButton'
interface Post {
  userId: number
  id: number
  title: string
  body: string
}
/**
 * Haciendo fetch de datos desde un server side component
 */

const fetchPosts = () => {
  return fetch('https://jsonplaceholder.typicode.com/posts').then((res) => res.json())
}

const ListOfPosts = async () => {
  const posts = (await fetchPosts()) as Post[]

  return (
    <>
      {posts.slice(0, 5).map((post) => (
        <article key={post.id}>
          <h2 style={{ margin: '1rem 0', color: '#09f' }}>{post.title}</h2>
          <p>{post.body}</p>
          <LikeButton />
        </article>
      ))}
    </>
  )
}

export default ListOfPosts
