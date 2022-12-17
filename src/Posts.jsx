import axios from "axios";
import { useEffect, useState } from "react";

const postStyle ={
    backgroundColor:"beige",
    margin:'5px',
    borderRadius:'5px'
}

const listStyle = {
   listStyleType:"none",
   padding:'5px',
}
const Posts = () => {

    const [postDetails, setPostDetails] = useState([]);

    // CDM, CDU
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts').then((response) => {
            setPostDetails(response.data)
        })
    }, [])
    return (
        <div>
            <h2>Posts made by various users</h2>
            <ul>
                {
                    postDetails && postDetails.map((post, index) => (
                        <div style={postStyle} key={index}>
                            <li style={listStyle}> {post.id}</li>
                            <li style={listStyle}> {post.title}</li>
                            <li style={listStyle}> {post.body}</li>
                        </div>
                    ))
                }</ul>
        </div>
    )
}

export default Posts;