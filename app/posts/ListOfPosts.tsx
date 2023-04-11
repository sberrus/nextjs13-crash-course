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

const fetchPosts = async () => {
  // server side fetching en cada request
  // return fetch('https://jsonplaceholder.typicode.com/posts', {
  //   cache: 'no-store'
  // }).then((res) => res.json())

  // almacena una version estática del sitio por una cantidad de
  // tiempo definida
  return fetch('https://jsonplaceholder.typicode.com/posts', {
    next: {
      revalidate: 60 // cada 60 segundos realiza un fetch y almacena una versión estática del sitio con el respectivo fetch.
    }
  }).then((res) => res.json())
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

/**
 * IMPORTANTE:
 *
 * Una cosa que se debe tomar en cuenta a la hora de usar server
 * side componentes es que cuando estamos haciendo fetching de
 * datos, estos datos los va a generar al momento en el
 * que se haga la build de la página. Por lo que, se debe
 * tener en cuenta esto si queremos utilizar esta funcionaliad
 * de esta forma o si necesitamos tener esa información
 * actualizada en el momento en que los usuarios visitan nuestra
 * web.
 *
 * Esto es realmente útil si sabemos que vamos a obtener datos de
 * una bbdd pero que estos podamos actualizarlos en cada
 * despliegue.
 *
 * Para controlar el fetching de datos debemos pasar en las
 * options del fetch, la prop cache:"no-store". Esto indica a
 * next que necesitamos que esa información se solicite al
 * momento en que un usuario haga request de la página
 * de esta forma mantenemos esta información constantemente
 * actualizada.
 *
 * OPTIMIZACIÓN PLUS Incremental Static Regeneration:
 *
 * Hay una tercera opción que nos ofrece next que dependiendo el
 * caso, también nos puede servir de gran ayuda en optimización
 * que es el Incremental Static Regeneration.
 *
 * Este tercer método es realmente útil ya que podemos indicarle
 * a next que dependiendo de una cantidad de tiempo x en
 * segundos, pasado ese tiempo si algún cliente realiza una
 * request, al momento de obtener esos datos nos almacena una
 * versión estática pero actualizada de dichos datos. Por lo
 * que tendremos por una cantidad de tiempo X datos estáticos
 * que sin realizar ningun fetch adicional, nos mantiene la
 * aplicación actualizada. Esto lo hacemos pasando la prop next:{
 * revalidate: cantidadSegundos } en
 * las opciones del método fetch()
 */
