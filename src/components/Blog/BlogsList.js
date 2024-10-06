import React, { useContext } from "react";
import BlogContext from "../../store/blog-context";
import BlogItem from "./BlogItem/BlogItem";
import "./BlogList.css";

const BlogsList=(props)=>{
    const blogCtx=useContext(BlogContext);

    const {deleteBlog} = blogCtx;

    return (
        <div className="blog-list">
            {blogCtx.blogs.map((blog)=>{
                return(
                    <BlogItem 
                        key={blog.id}
                        blog={blog}
                        onEdit={props.onEdit}
                        deleteBlog={deleteBlog}
                    />
                )
            })}
        </div>
    )
}

export default BlogsList;