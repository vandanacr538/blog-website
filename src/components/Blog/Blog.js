import React, { useState } from "react";
import "./Blog.css";
import BlogForm from "../BlogForm/BlogForm";

const Blog = () =>{
    const [isFormOpen, setIsFormOpen] = useState(false);

    const openFormHandler=()=>{
        setIsFormOpen(true);
    }

    const closeFormHandler=()=>{
        setIsFormOpen(false);
    }

    return(
        <div className="blog">
            {isFormOpen && <BlogForm  onClose={closeFormHandler}/>}
            <h1>Blog Website</h1>
            <button onClick={openFormHandler}>Add Blog</button>
        </div>
    )
}

export default Blog;