import React from 'react'
import NavbarBrand from './NavbarBrand'
import NavbarUL from './NavbarUL'

const Header = () => {
  return (
    <header className="flex justify-between p-1 bg-orange-600">
        <nav className="ml-2">
            <NavbarBrand brandurl="/" brandname="Hacker News" />
            <NavbarUL />
        </nav>
    </header>
  )
}

export default Header