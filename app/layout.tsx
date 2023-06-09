// imports
import * as React from 'react'
import Navigation from './components/Navigation'

// styles
import './globals.css'

// metdata
export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app'
}

// eslint-disable-next-line space-before-function-paren
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <head>
        <title>Probando cositas</title>
      </head>
      <body>
        <Navigation />
        {/* el componente children es el que renderiza el componente page que queremos renderizar */}
        {children}
      </body>
    </html>
  )
}

/**
 * ARCHIVO layout.tsx
 * Este archivo es especial ya que es el componente
 * que arropa toda nuestra app.
 * Este es el encargado de tener las configuraciones del header
 * de la app como las etiquetas de SEO entre otras cosas ya uqe
 * este archivo es el padre de toda la app por lo cual va a poder
 * ser accedido globalmente dentro de nuestra app.
 */
