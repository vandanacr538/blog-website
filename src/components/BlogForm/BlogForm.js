import Modal from "../UI/Modal";

const BlogForm = () => {
  return (
    <Modal>
      <form>
        <div>
          <label htmlFor="image-url">Image Url</label>
          <input type="url" id="image-url"></input>
        </div>
        <div>
          <label htmlFor="title">Title</label>
          <input type="text" id="title"></input>
        </div>
        <div>
          <label htmlFor="description">Blog Description</label>
          <input type="text" id="description"></input>
        </div>
        <button type="submit">POST BLOG</button>
        <button>Close</button>
      </form>
    </Modal>
  );
};

export default BlogForm;
