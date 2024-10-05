import React from "react";

const BlogContext=React.createContext({
    blogs : [],
    deleteBlog: (id) => {}
})

export default BlogContext;