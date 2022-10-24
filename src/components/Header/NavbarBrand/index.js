import React from 'react'

const NavbarBrand = ({brandname, brandurl}) => {
  return (
    <h1 className="text-black text-3xl">
      <a href={brandurl}>{brandname}</a>
    </h1>
  )
}

export default NavbarBrand