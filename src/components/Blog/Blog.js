import React, { useState } from "react";
import "./Blog.css";
import BlogForm from "../BlogForm/BlogForm";
import BlogProvider from "../../store/BlogProvider";
import BlogsList from "./BlogsList";

const Blog = () =>{
    const [isFormOpen, setIsFormOpen] = useState(false);

    const openFormHandler=()=>{
        setIsFormOpen(true);
    }

    const closeFormHandler=()=>{
        setIsFormOpen(false);
    }

    return(
        <BlogProvider>
            <div className="blog">
                {isFormOpen && <BlogForm  onClose={closeFormHandler}/>}
                <h1>Blog Website</h1>
                <button onClick={openFormHandler}>Add Blog</button>
            </div>
            <BlogsList></BlogsList>
        </BlogProvider>
    )
}

export default Blog;