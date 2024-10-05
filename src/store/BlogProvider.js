import React, { useState } from "react";
import BlogContext from "./blog-context";

const BlogProvider=(props)=>{
    const [blogs, setBlogs] = useState([]);

    const blogContext={
        blogs : [{
            id: "1",
            imageUrl: "https://via.placeholder.com/150",
            title: "Placeholder",
            description: "placeholder abbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbxajkshhjkkk"
        }]
    }

    return(
        <BlogContext.Provider value={blogContext}>
            {props.children}
        </BlogContext.Provider>
    )
}

export default BlogProvider;