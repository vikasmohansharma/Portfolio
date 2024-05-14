import React from "react";
import "./Modal.scss";

const Modal = ({ isOpen, toggleModal, imageUrl, imageAlt }) => {
  return (
    <div className={`modal ${isOpen ? "open" : ""}`} onClick={toggleModal}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <img src={imageUrl} alt={imageAlt} />
        <button onClick={toggleModal} className="close-button">
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
