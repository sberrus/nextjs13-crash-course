import React from 'react'

const page = () => {
  return (
    <div>
      <h1>Este es el about</h1>
    </div>
  )
}

export default page

/**
 * RUTAS ANIDADAS:
 * nextjs para crear rutas en neustra app se basa en enrutado
 * usando el sistema de archivos del sistema. Por lo que si
 * queremos crear una ruta anidada dentro de nuestra app,
 * solo debemos crear una carpeta usando como nombre
 * la ruta a la cual queremos usar y añadimos el archivo page.tsx
 *
 * page.tsx: El archivo page.tsx es especial ya que
 * este se encarga de renderizar la página raíz de la ruta
 * dentro de la carpeta que deseamos usar como ruta. Por lo
 * que si queremos crear una ruta /about en el archivo dentro de
 * app/about debemos crear un archuivo page.tsx siendo este
 * el encargado de renderizar el componente raíz de dicha página.
 */
