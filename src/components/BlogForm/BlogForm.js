import { useState } from "react";
import Modal from "../UI/Modal";

const BlogForm = (props) => {
  const [imageUrl, setImageUrl] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

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
    const blogData={
        imageUrl: imageUrl,
        title: title,
        description: description,
    }
    console.log(blogData);
    props.onClose();
  }

  return (
    <Modal>
      <form>
        <div>
          <label htmlFor="image-url">Image Url</label>
          <input
            type="url"
            id="image-url"
            value={imageUrl}
            onChange={imageUrlChangeHandler}
          ></input>
        </div>
        <div>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={titleChangeHandler}
          ></input>
        </div>
        <div>
          <label htmlFor="description">Blog Description</label>
          <input
            type="text"
            id="description"
            value={description}
            onChange={descriptionChangeHandler}
          ></input>
        </div>
        <button type="submit" onClick={addBlogHandler}>POST BLOG</button>
        <button onClick={props.onClose}>Close</button>
      </form>
    </Modal>
  );
};

export default BlogForm;
