import React from 'react'
import Counter from './Counter'

type PostsLayoutProps = {
  children: JSX.Element
}

const Layout = ({ children }: PostsLayoutProps) => {
  return (
    <div>
      <small>Home &bull; Posts</small>
      <br />
      <Counter />
      {children}
    </div>
  )
}

export default Layout

/**
 * Como bien hemos dicho antes, el layout.tsx es otro
 * archivo especal dentro de los archivos de next js
 * este es el que nos permite, dentro de una ruta,
 * tener un wrapper para el resto de componentes
 * que el servidor va a renderizar para esta ruta.
 *
 * Persistencia de datos en los layouts:
 *
 * Una de las cosas interesantes de los layouts y su
 * implementación es que si tu renderizar componentes de
 * cliente dentro de los layouts, estos mantienen su estado
 * independientemente de que tan lejos estes en el arbol de
 * nodos, siempre va a mantener su estado.
 *
 * En este ejemplo podemos observar como en este layout tenemos un
 * componente cliente con un counter el cual si navegamos
 * a cualquiera de los posts, podemos seguir haciendo uso
 * y manteniendo su estado independientemente de donde nos
 * encontremos, siempre y cuando estemos como hijos de ese
 * layout.
 */
