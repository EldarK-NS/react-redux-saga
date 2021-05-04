import React from 'react'
import Post from './Post'

function Posts({ posts }) {
    if (!posts.length) {
        return <p className="text-center">No posts</p>
    }
    return posts.map(post => <Post post={post} key={post} />)

}

export default Posts
