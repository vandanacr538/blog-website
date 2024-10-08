import { useContext, useEffect, useState } from "react";
import Modal from "../UI/Modal";
import BlogContext from "../../store/blog-context";
import "./BlogForm.css";

const BlogForm = () => {
  const blogCtx=useContext(BlogContext);  
  const {editForm, closeFormHandler, addBlog, editBlog} = blogCtx; 
  const [imageUrl, setImageUrl] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [errors, setErrors] = useState({});

  useEffect(()=>{
    if(editForm){
        setImageUrl(editForm.imageUrl);
        setTitle(editForm.title);
        setDescription(editForm.description);
    }
  }, [editForm]);

  const imageUrlChangeHandler = (event) => {
    if(event.target.value.trim().length>0 && errors.imageUrlError){
      setErrors((prevError)=>{
        return {...prevError, imageUrlError: ""};
      });
    }
    setImageUrl(event.target.value);
  };

  const titleChangeHandler = (event) => {
    if(event.target.value.trim().length>0 && errors.titleError){
      setErrors((prevError)=>{
        return {...prevError, titleError: ""};
      });
    }
    setTitle(event.target.value);
  };

  const descriptionChangeHandler = (event) => {
    if(event.target.value.trim().length>0 && errors.descriptionError){
      setErrors((prevError)=>{
        return {...prevError, descriptionError: ""};
      });
    }
    setDescription(event.target.value);
  };

  const formValidation=()=>{
    let errorList={};
    let valid=true;
    if(imageUrl.trim().length===0){
      errorList.imageUrlError="Image Url field should not be empty!";
      valid=false;
    }
    if(title.trim().length===0){
      errorList.titleError="Title field should not be empty";
      valid=false;
    }
    if(description.trim().length===0){
      errorList.descriptionError="Description field should not be empty";
      valid=false;
    }
    setErrors(errorList);
    return valid;
  }

  const blogFormSubmitHandler=(event)=>{
    event.preventDefault();
    if(formValidation()){
      const newID = Math.random().toString();
      const blogData={
          id: (editForm ? editForm.id : newID),
          imageUrl: imageUrl,
          title: title,
          description: description,
      }
      if(editForm){
          editBlog(blogData);
      }
      else{
          addBlog(blogData);
      }
      closeFormHandler();
    }
  }

  return (
    <Modal>
      <form className="blog-form">
        <div className={`blog-control img-control ${errors.imageUrlError ? "invalid" : ""}`}> 
          <label htmlFor="image-url">Image Url</label>
          <input
            type="url"
            id="image-url"
            value={imageUrl}
            onChange={imageUrlChangeHandler}
          ></input>
          {errors.imageUrlError && <p>{errors.imageUrlError}</p>}
        </div>
        <div className={`blog-control ${errors.titleError ? "invalid" : ""}`}>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={titleChangeHandler}
          ></input>
          {errors.titleError && <p>{errors.titleError}</p>}
        </div>
        <div className={`blog-control ${errors.descriptionError ? "invalid" : ""}`}>
          <label htmlFor="description">Blog Description</label>
          <input
            type="text"
            id="description"
            value={description}
            onChange={descriptionChangeHandler}
          ></input>
          {errors.descriptionError && <p>{errors.descriptionError}</p>}
        </div>
        <div className="blog-form-actions">
          <button type="submit" onClick={blogFormSubmitHandler}>
              {editForm ? "Update Blog" : "POST BLOG"}
          </button>
          <button onClick={closeFormHandler}>Close</button>
        </div>
      </form>
    </Modal>
  );
};

export default BlogForm;
