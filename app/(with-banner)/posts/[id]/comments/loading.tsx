import React from 'react'

const loading = () => {
  return <div>Cargando los comentarios...</div>
}

export default loading

/**
 * Loading component
 *
 * El componente loading es un componente especial de next
 * como page.tsx o layout.tsx que nos permite tener un callback
 * para cuando tenemos un componente que sabemos que va
 * a tardar en devolver datos del servidor.
 *
 * Se debe poner en la carpeta de la ruta del componente
 * que sabemos que va a tardar en renderizar debido
 * a un fetch que lleva tiempo o a algún proceso que bloquee
 * el renderizado del componente. Esto lo hacemos para mejorar
 * la UI de los tiempos de espera.
 *
 * En este caso tenemos un await en el componente comments
 * el cual simula un fetch lento de datos. Para evitar que se
 * no haya ninguna ayuda visual de carga utilizamos
 * el loading.tsx para mejorar este comportamiento.
 */
