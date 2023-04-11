import React from 'react'

type WithBannerLayoutProps = {
  children: JSX.Element
}
const WithBannerLayout = ({ children }: WithBannerLayoutProps) => {
  return (
    <div>
      <small style={{ background: '#d1d1d1', color: 'purple', padding: '.5rem', display: 'inline-block' }}>
        Este es un layout compartido entre distintas rutas dentro de /(with-banner)
      </small>
      {children}
    </div>
  )
}

export default WithBannerLayout

/**
 * Como se puede observar hay una carpeta que tiene el nombre
 * entre parentesis (with-banner). Esto se utiliza para poder
 * compartir caracteristicas como los page, layout, error etc...
 * de next js entre varias rutas en next.
 *
 * Esto es de utilidad si por ejemplo queremos tener un layout que
 * compartan varias rutas pero que cada ruta tenga su layout
 * independiente.
 *
 * En este caso podemos ver que el layout de (with-banner) se
 * comparte en /about y en /posts, pero en home tiene su layout
 * fuera de (with-banner) por lo que este componente no va a
 * heredar los componentes especiales dentro de (with-banner).
 */
