import Link from 'next/link'
import React from 'react'

// styles
import style from './navigation.module.css'

const links = [
  {
    label: 'Home',
    route: '/'
  },
  {
    label: 'About',
    route: '/about'
  },
  {
    label: 'Posts',
    route: '/posts'
  }
]
const Navigation = () => {
  return (
    <header className={style.header}>
      <nav>
        <ul className={style.navigation}>
          {links.map(({ label, route }) => (
            <li key={label}>
              <Link href={`${route}`}>{label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Navigation
