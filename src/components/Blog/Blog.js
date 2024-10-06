import React, { useState } from "react";
import "./Blog.css";
import BlogForm from "../BlogForm/BlogForm";
import BlogProvider from "../../store/BlogProvider";
import BlogsList from "./BlogsList";
import Button from "../UI/Button/Button";

const Blog = () =>{
    const [isFormOpen, setIsFormOpen] = useState(false);
    const [editForm, setEditForm] = useState("");

    const openFormHandler=()=>{
        setEditForm("");
        setIsFormOpen(true);
    }

    const closeFormHandler=()=>{
        setIsFormOpen(false);
        setEditForm("");
    }

    const openFormToEditHandler=(blogToEdit)=>{
        setEditForm(blogToEdit);
        setIsFormOpen(true);
    }

    return(
        <BlogProvider>
            <div className="blog">
                {isFormOpen && <BlogForm  editForm={editForm} onClose={closeFormHandler}/>}
                <h1>Blog Website</h1>
                <Button type="button" onClick={openFormHandler}>Add New Blog</Button>
            </div>
            <BlogsList onEdit={openFormToEditHandler}></BlogsList>
        </BlogProvider>
    )
}

export default Blog;