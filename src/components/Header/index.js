import React from 'react'

const Header = () => {
  return (
    <header className="flex justify-between p-3 bg-orange-600">
        <h1 className="text-black text-3xl">Hacker News</h1>
        <nav>
            <ul className="flex mt-1 mr-3">
                <li><a href="/" className="text-white hover:text-orange-200 p-3">Home</a></li>
                <li><a href="/" className="text-white hover:text-orange-200 p-3">News</a></li>
                <li><a href="/" className="text-white hover:text-orange-200 p-3">Forum</a></li>
                <li><a href="/" className="text-white hover:text-orange-200 p-3">Kontakt</a></li>
            </ul>
        </nav>
    </header>
  )
}

export default Header