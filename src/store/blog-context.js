import React from "react";

const BlogContext=React.createContext({
    blogs : [],
    isFormOpen: false,
    editForm: "",
    openFormHandler: () => {},
    closeFormHandler: ()=>{},
    openFormToEditHandler: (blog)=>{},
    addBlog: (blog) => {},
    editBlog: (blog) => {},
    deleteBlog: (id) => {}
})

export default BlogContext;