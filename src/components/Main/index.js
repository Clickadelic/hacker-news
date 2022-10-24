import React, {useState, useEffect} from 'react'
import DataFetching from './DataFetching'

const Main = () => {
  
  return (
    <main className="container mx-auto">
      <h1 className="text-2xl font-bold my-5">Data by Resource Type</h1>
      <DataFetching />
    </main>
  )
}

export default Main