import React from "react";
import "./BlogItem.css";
import Button from "../../UI/Button/Button";

const BlogItem = (props) => {
    const {blog, onEdit, deleteBlog} = props;
    return (
        <div className="blog-item">
            <h2>{blog.title}</h2>
            <img src={blog.imageUrl} alt={blog.title}></img>
            <p>{blog.description}</p>
            <div className="item-actions">
                <Button type="button" onClick={() => onEdit(blog)}>Edit Blog</Button>
                <Button type="button" onClick={() => deleteBlog(blog.id)}>Delete Blog</Button>
            </div>
        </div>
  );
};

export default BlogItem;
