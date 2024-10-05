import React, { useContext } from "react";
import BlogContext from "../../store/blog-context";

const BlogsList=(props)=>{
    const blogCtx=useContext(BlogContext);

    const {deleteBlog} = blogCtx;


    return (
        <div>
            {blogCtx.blogs.map((blog)=>{
                return(
                    <div key={blog.id}>
                        <h2>{blog.title}</h2>
                        <img src={blog.imageUrl} alt={blog.title}></img>
                        <p>{blog.title}</p>
                        <button onClick={()=>props.onEdit(blog)}>Edit Blog</button>
                        <button onClick={()=>deleteBlog(blog.id)}>Delete Blog</button>
                    </div>
                )
            })}
        </div>
    )
}

export default BlogsList;