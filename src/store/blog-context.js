import React from "react";

const BlogContext=React.createContext({
    blogs : [],
    addBlog: (blog) => {},
    editBlog: (blog) => {},
    deleteBlog: (id) => {}
})

export default BlogContext;