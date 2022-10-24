import React from 'react'
import NavbarBrand from './NavbarBrand'

const Header = () => {
  return (
    <header className="flex justify-between p-3 bg-orange-600">
        <NavbarBrand brandname="Hacker News" brandurl="/" />
        <nav>
            <ul className="flex mt-1 mr-3">
                <li><a href="/" className="text-black hover:text-orange-200 p-3">new</a></li>
                <li><a href="/" className="text-black hover:text-orange-200 p-3">past</a></li>
                <li><a href="/" className="text-black hover:text-orange-200 p-3">comments</a></li>
                <li><a href="/" className="text-black hover:text-orange-200 p-3">ask</a></li>
            </ul>
        </nav>
    </header>
  )
}

export default Header