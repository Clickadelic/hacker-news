import React, {useState, useEffect } from 'react'
import LoadingInfo from '../LoadingInfo'
import FetchTitle from './FetchTitle'

const DataFetching = () => {
    const [resourceType, setResourceType] = useState('posts')
    const [items, setItems] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    console.log('Render useEffect')
    function getData(){
        setIsLoading(true)
        fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
        .then(response => response.json())
        .then(json => setItems(json))
        setIsLoading(false)
    }
    useEffect(() => {

        getData()

    }, [resourceType])

    // Create full postlist
    const fullPostList = items.map((item, index) => {
        return <li key={index} id={item.id}>{item.body}</li>
    })

    // Kicks in while loading
    if(isLoading){
        return <LoadingInfo title="user"/>
    }

    return (
        <div>
            <button className="p-3"onClick={ () => { setResourceType('posts')} }>Posts</button>
            <button className="p-3"onClick={ () => { setResourceType('users')} }>Users</button>
            <button className="p-3"onClick={ () => { setResourceType('comments')} }>Comments</button>
            <FetchTitle resourceType={resourceType} />
            <ul className="list-disc ml-7">
                {fullPostList}
            </ul>
        </div>
    )
}

export default DataFetching