import React from 'react'
import Post from './Post'

function FetchedPosts({ posts }) {
    if (!posts.length) {
        return <button className="btn btn-primary">Download</button>
    }
    return posts.map(post => <Post post={post} key={post} />)
}

export default FetchedPosts