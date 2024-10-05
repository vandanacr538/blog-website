import React, { useState } from "react";
import BlogContext from "./blog-context";

const BlogProvider=(props)=>{
    const [blogs, setBlogs] = useState([{
        id: "1",
        imageUrl: "https://via.placeholder.com/150",
        title: "Placeholder",
        description: "placeholder abbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbxajkshhjkkk"
    }]);

    const deleteBlogHandler=(id)=>{
        console.log(id)
        setBlogs((prevBlogs)=>{
            return prevBlogs.filter((blog)=>blog.id!==id)
        });
    }

    const blogContext={
        blogs : blogs,
        deleteBlog: deleteBlogHandler
    }

    return(
        <BlogContext.Provider value={blogContext}>
            {props.children}
        </BlogContext.Provider>
    )
}

export default BlogProvider;