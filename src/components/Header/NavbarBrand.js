import React from 'react'

const NavbarBrand = ({brandname, brandurl}) => {
  return (
    <h1 className="text-black text-2xl ml-1">
      <a href={brandurl}>
        <span>{brandname}</span>
      </a>
    </h1>
  )
}

export default NavbarBrand