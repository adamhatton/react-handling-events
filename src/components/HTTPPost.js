import React, { Component } from 'react'
import axios from 'axios';

export class HTTPPost extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         apiResponse: null
      }
    }

    postToApi = () => {
        axios.post('https://jsonplaceholder.typicode.com/posts',
            {
                title: 'Code along with Adam',
                body: 'It appears to be working',
                userId: 12358,
            }
        ).then(
            response => {
                console.log(response);
                this.setState({
                    apiResponse: response.data
                })
            }
        )
    }

  render() {
    const {apiResponse} = this.state;
    return (
      <div>
        <button onClick={this.postToApi}>
            Create Post
        </button>
        {
            apiResponse
            ? (<div>
                <h1>{apiResponse.title}</h1>
                <p>{apiResponse.body}</p>
                <p>{apiResponse.id}</p>
                <p>{apiResponse.userId}</p>
            </div>)
            : (<p>Please click to generate a post</p>)
        }
      </div>
    )
  }
}

export default HTTPPost