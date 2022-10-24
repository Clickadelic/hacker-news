import React, {useState, useEffect } from 'react'

const DataFetching = () => {
    const [resourceType, setResourceType] = useState('posts')
    const [items, setItems] = useState([])
    console.log('Render useEffect')
    useEffect(() => {
        // console.log('Render useEffect')
        fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
        .then(response => response.json())
        .then(json => setItems(json))
    }, [resourceType])
    const fullPostList = items.map(item => {
        return <li>{JSON.stringify(item.body)}</li>
    })
    return (
        <div>
            <button className="p-3 border border-indigo-600"onClick={ () => { setResourceType('posts')} }>Posts</button>
            <button className="p-3 border border-indigo-600"onClick={ () => { setResourceType('users')} }>Users</button>
            <button className="p-3 border border-indigo-600"onClick={ () => { setResourceType('comments')} }>Comments</button>
            <h1>{resourceType}</h1>
            <ul>
                {fullPostList}
            </ul>
        </div>
    )
}

export default DataFetching