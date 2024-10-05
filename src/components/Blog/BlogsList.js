import React, { useContext } from "react";
import BlogContext from "../../store/blog-context";

const BlogsList=()=>{
    const blogCtx=useContext(BlogContext);
    return (
        <div>
            {blogCtx.blogs.map((blog)=>{
                return(
                    <div key={blog.id}>
                        <h2>{blog.title}</h2>
                        <img src={blog.imageUrl} alt={blog.title}></img>
                        <p>{blog.title}</p>
                        <button>Edit Blog</button>
                        <button>Delete Blog</button>
                    </div>
                )
            })}
        </div>
    )
}

export default BlogsList;