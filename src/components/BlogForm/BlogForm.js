import { useContext, useEffect, useState } from "react";
import Modal from "../UI/Modal";
import BlogContext from "../../store/blog-context";
import "./BlogForm.css";

const BlogForm = (props) => {
  const blogCtx=useContext(BlogContext);  
  const {editForm} = props;  
  const [imageUrl, setImageUrl] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(()=>{
    if(editForm){
        setImageUrl(editForm.imageUrl);
        setTitle(editForm.title);
        setDescription(editForm.description);
    }
  }, [editForm]);

  const imageUrlChangeHandler = (event) => {
    setImageUrl(event.target.value);
  };

  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
  };

  const descriptionChangeHandler = (event) => {
    setDescription(event.target.value);
  };

  const addBlogHandler=(event)=>{
    event.preventDefault();
    const newID = Math.random().toString();
    const blogData={
        id: (editForm ? editForm.id : newID),
        imageUrl: imageUrl,
        title: title,
        description: description,
    }
    if(editForm){
        blogCtx.editBlog(blogData);
    }
    else{
        blogCtx.addBlog(blogData);
    }
    props.onClose();
  }

  return (
    <Modal>
      <form className="blog-form">
        <div className="blog-control img-control"> 
          <label htmlFor="image-url">Image Url</label>
          <input
            type="url"
            id="image-url"
            value={imageUrl}
            onChange={imageUrlChangeHandler}
          ></input>
        </div>
        <div className="blog-control">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={titleChangeHandler}
          ></input>
        </div>
        <div className="blog-control">
          <label htmlFor="description">Blog Description</label>
          <input
            type="text"
            id="description"
            value={description}
            onChange={descriptionChangeHandler}
          ></input>
        </div>
        <div className="blog-form-actions">
          <button type="submit" onClick={addBlogHandler}>
              {editForm ? "Update Blog" : "POST BLOG"}
          </button>
          <button onClick={props.onClose}>Close</button>
        </div>
      </form>
    </Modal>
  );
};

export default BlogForm;
