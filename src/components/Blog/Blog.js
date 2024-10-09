import React, { useContext } from "react";
import "./Blog.css";
import BlogForm from "../BlogForm/BlogForm";
import BlogsList from "./BlogsList";
import Button from "../UI/Button/Button";
import BlogContext from "../../store/blog-context";

const Blog = () =>{
    const blogCtx = useContext(BlogContext);
    const {isFormOpen, openFormHandler} = blogCtx;

    return(
        <React.Fragment>
            <div className="blog">
                {isFormOpen && <BlogForm/>}
                <h1>Blog Website</h1>
                <Button type="button" onClick={openFormHandler}>Add New Blog</Button>
                <hr></hr>
            </div>
            <BlogsList />
        </React.Fragment>
    )
}

export default Blog;