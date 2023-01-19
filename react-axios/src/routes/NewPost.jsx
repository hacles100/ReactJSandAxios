import React from "react";
import './NewPost.css';
import blogFecth from "../axios/config";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const NewPost = () => {

    const navigate = useNavigate()

    const [title, setTitle] = useState()
    const [body, setBody] = useState()

    const createPost = async (e) => {
        // pausa o envio do formulario
        e.preventDefault();

        const post = { title, body, userId: 1 }

        await blogFecth.post("/posts", {
            body: post,
        });
        
        navigate("/")
        // console.log(title, body)
    }


    return (
        <div className="new-post">
            <h2>Inserir novo Post:</h2>
            <form className="container" onSubmit={(e) => createPost(e)}>
                <div className="form-control">
                    <label htmlFor="title">Titulo:</label>
                    <input 
                     type="text"
                     name="title"  
                     id="title" 
                     placeholder="Digite o titulo"
                     onChange={(e) => setTitle(e.target.value)}
                     />
                </div>

                <div className="form-control">
                    <label htmlFor="body">Conteudo:</label>
                    <textarea 
                     name="body" 
                     id="body" 
                     placeholder="Digite o conteudo"
                     onChange={(e) => setTitle(e.target.value)}
                     ></textarea>
                </div>

                <input type="submit" value="Criar Post" className="btn" />
            </form>
        </div>
    )
}

export default NewPost