import React from 'react'
import ListOfPosts from './ListOfPosts'

const PostsPage = async () => {
  return (
    <section>
      {/* @ts-expect-error Server Component */}
      <ListOfPosts />
    </section>
  )
}

export default PostsPage

/**
 * Server Side components
 *
 * Por defecto, nextjs utiliza server components el cual
 * no nos permite utilizar muchas de las caracteristicas de
 * React como pueden ser los hooks, por ejemplo.
 *
 * Esto nos trae ventajas principalmente de SEO ya que hay
 * ciertas cosas que solemos hacer en el cliente
 * como el fetching de datos el cual los bots de SEO tienen
 * ciertos incomvenietnes a la hora de indexar el contenido
 * que se obtiene del lado del cliente.
 *
 * Con los server side components, esto se evita y hace
 * que al momento en que se solicita la información, es el
 * propio servidor el que realiza el fetching de datos
 * y devuelve ya los datos con la información ya cargada. Esto
 * ayuda mucho según sea el caso, principalmete en SEO.
 *
 * RENDIMIENTO:
 * Esto nos ofrece otra ventaja interesante... Debido a que
 * estos componentes estan siendo generados por el servidor,
 * esto nos ofrece la ventaja que podemos utilizar lógica desde
 * el servidor lo cual hace que no estemos consumiendo recursos
 * del cliente y esto optimiza la velocidad de carga y rendimiento
 * de nuestro sitio web.
 *
 * Por lo que todo lo que podamos renderizar y manipular del lado
 * del servidor en vez de el lado del cliente va a ser un plus
 * en rendimiento de cara a los clientes.
 */
