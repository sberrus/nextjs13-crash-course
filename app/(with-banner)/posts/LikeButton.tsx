'use client'

import React, { useState } from 'react'

const LikeButton = () => {
  const [liked, setLiked] = useState(false)

  return <button onClick={() => setLiked(!liked)}>{liked ? '❤️' : '🖤'}</button>
}

export default LikeButton

/**
 * Componentes de cliente:
 *
 * Nextjs ahora nos hace tener que pensar de una forma distinta
 * para poder optimizar al maximo el uso de los recursos del
 * cliente y del servidor.
 *
 * Como bien se ha visto, los componentes de next son por defecto
 * de servidor, por lo que si queremos hacer cualquier cosa que
 * necesitemos acceder a interfaces del cliente como es el
 * fetch(), API's del navegador, los hooks de React etc...
 * eso lo debemos hacer volviendo transformando el componente a
 * un componente de cliente.
 *
 * Esto lo hacemos añadiendo en la primera linea del componente
 * el string "use client" indicando la funcionaliad de componente
 * de cliente.
 *
 * OPTIMIZACION:
 *
 * Para mejorar en optimización como hemos comentado, hay que
 * pensar en renderizar siempre que se pueda los componentes en
 * el servidor para mejorar la optimización de nuestro sitio web.
 * Esto hace que a la hora de pensar en cuando usar componentes
 * de cliente tengamos que pensar en cual es el componente más
 * pequeño que sea necesario que sea componente cliente. Por lo
 * que debemos buscar a que el componente cliente contenga la
 * menor información posible desde un principio para que la
 * mayoria de elementos se carguen en el servidor.
 */
