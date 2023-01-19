import React from "react";
import { useState, useEffect } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
import './Home.css'



const Home = () => {

    const [posts, setPosts] = useState([])

    const getPosts = async() => {
       
        try {
            
            const response = await axios.get("https://jsonplaceholder.typicode.com/posts")
            
            const data = response.data
            console.log(data)

            setPosts(data)

        } catch (error) {

            console.log("Error!")
        }

    }

    useEffect(() => {
        getPosts()
    }, [])


    return (
        <div className="home">
            <h1>Ultimos Posts</h1>
            {posts.length === 0 ? <p>Carregando......</p> : (
               posts.map((post) => (
                 <div className="post" key={post.id}>
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                    <Link to={`/posts/${post.id}`} className="btn">Ler Mais</Link>
                 </div>
               ))
            ) }
        </div>
    )
}

export default Home