import React from "react";
import "./Blog.css";
import BlogForm from "../BlogForm/BlogForm";

const Blog = () =>{

    return(
        <div className="blog">
            <BlogForm />
            <h1>Blog Website</h1>
            <button>Add Blog</button>
        </div>
    )
}

export default Blog;