import React, { useContext } from "react";
import BlogContext from "../../store/blog-context";
import BlogItem from "./BlogItem/BlogItem";
import "./BlogList.css";

const BlogsList=()=>{
    const blogCtx=useContext(BlogContext);

    const {openFormToEditHandler, deleteBlog} = blogCtx;

    return (
        <div className="blog-list">
            {blogCtx.blogs.map((blog)=>{
                return(
                    <BlogItem 
                        key={blog.id}
                        blog={blog}
                        onEdit={openFormToEditHandler}
                        deleteBlog={deleteBlog}
                    />
                )
            })}
        </div>
    )
}

export default BlogsList;