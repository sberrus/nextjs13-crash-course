import Link from 'next/link'
import React from 'react'

interface Post {
  userId: number
  id: number
  title: string
  body: string
}

type SinglePostsProp = {
  params: any
  children: JSX.Element
}

const fetchSinglePost = async (id: string) => {
  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    cache: 'no-store'
  }).then((res) => res.json())
}

const SinglePost = async ({ params, children }: SinglePostsProp) => {
  // obteniendo el param id
  const { id } = params
  const post = (await fetchSinglePost(id)) as Post
  return (
    <>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <br />
      <Link href={`/posts/${id}/comments`}>Ver comentarios</Link>
      {children}
    </>
  )
}

export default SinglePost

/**
 * RUTA CON URL PARAMS:
 *
 * Para usar los url params dentro de una ruta anidada, debemos
 * nombrar la carpeta usando corchetes y dentro el namspace
 * del param el cual usaremos para acceder a dicho dato
 * pasado por url.
 * En este caso hemos creado la carpeta /posts/[id] el cual nos
 * permite acceder a dicho param usando este dato.
 *
 * Para acceder en el componente a dicha información, esto
 * lo hacemos usando una prop especial de next llamado
 * params teniendo este toda la informació relacionada con los
 * params de la url.
 */
