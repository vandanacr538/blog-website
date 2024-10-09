import React, { useState } from "react";
import BlogContext from "./blog-context";

const BlogProvider=(props)=>{
    const [blogs, setBlogs] = useState([]);
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

    const addBlogHandler=(newBlog)=>{
        setBlogs((prevBlogs)=>{
            return [...prevBlogs, newBlog];
        });
    }

    const editBlogHandler=(editedBlog)=>{
        setBlogs((prevBlogs)=>{
            return prevBlogs.map((blog)=>{
                if(blog.id===editedBlog.id){
                    return {...blog, ...editedBlog};
                }
                return blog;
            })
        })
    }

    const deleteBlogHandler=(id)=>{
        console.log(id)
        setBlogs((prevBlogs)=>{
            return prevBlogs.filter((blog)=>blog.id!==id)
        });
    }

    const blogContext={
        blogs : blogs,
        isFormOpen: isFormOpen,
        editForm: editForm,
        openFormHandler,
        closeFormHandler,
        openFormToEditHandler,
        addBlog: addBlogHandler,
        editBlog: editBlogHandler,
        deleteBlog: deleteBlogHandler
    }

    return(
        <BlogContext.Provider value={blogContext}>
            {props.children}
        </BlogContext.Provider>
    )
}

export default BlogProvider;