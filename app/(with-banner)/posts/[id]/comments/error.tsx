'use client'
import React from 'react'

const error = () => {
  return <div>Error al cargar los comentarios ❌</div>
}

export default error

/**
 * Error compoente
 *
 * error.tsx es otro componente especial de next. Este
 * nos permite mostrar este componente siempre que el server
 * component nos devuelve por algún motivo algún error.
 */
