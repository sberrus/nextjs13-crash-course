import React from 'react'

const page = ({ params }) => {
  // obteniendo el param id
  const { id } = params
  return <div>post con {id}</div>
}

export default page

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
