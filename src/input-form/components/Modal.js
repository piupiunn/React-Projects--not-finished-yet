import React from "react";
import "./Modal.css";

export default function Modal({ children, closeModal }) {
  return (
    <div className="modal-backdrop">
      <div className="modal">
        {children}
        <button onClick={closeModal}>Close</button>
      </div>
    </div>
  );
}
