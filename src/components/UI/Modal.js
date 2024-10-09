import React, { useContext } from "react";
import ReactDOM from "react-dom";
import "./Modal.css";
import BlogContext from "../../store/blog-context";

const Backdrop = () => {
  const {closeFormHandler} = useContext(BlogContext);
  return <div className="backdrop" onClick={closeFormHandler}></div>;
};

const ModalOverlay = (props) => {
  return (
    <div className="modal">
      <div className="content">{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById("overlays");

const Modal = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(<Backdrop />, portalElement)};
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </React.Fragment>
  );
};

export default Modal;
