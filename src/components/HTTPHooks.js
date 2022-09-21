import React, {useState, useEffect } from 'react'
import axios from 'axios';

function HTTPHooks() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);
  const [postMessage, setPostMessage] = useState(null);
  const postToApi = () => {
    axios.post('https://jsonplaceholder.typicode.com/posts',
        {
            title: 'Code along with Adam',
            body: 'It appears to be working',
            userId: 12358,
        }
    ).then(
        response => {
            console.log(response);
            setPostMessage(response.status === 201
                ? `Success! Title: ${response.data.title}`
                : 'Failed'
            )
        }
    )
  }

  useEffect( () => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
            setPosts(
                Array.isArray(response.data)
                ? response.data
                : [response.data]
            )
        })
        .catch(error => {setError(error.message)})
  }, [])

  return (
    <div>
        <button onClick={postToApi}>
            Create Post
        </button>
        <p>{postMessage}</p>
        <h2>Posts:</h2>
        {
            posts.length ? (
                posts.map(post => (
                    <div key={post.id}>
                        <h2>{post.id}. {post.title}</h2>
                        <h4>By User ID {post.user}</h4>
                        <p>{post.body}</p>
                        <hr />
                    </div>
                ))
            ) : (
                error
                ? <p>{error}</p>
                : <h4>Loading posts...</h4>
            )
        }
    </div>
    )
}

export default HTTPHooks