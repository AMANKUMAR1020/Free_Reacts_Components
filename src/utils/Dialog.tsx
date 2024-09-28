import React from "react";

interface DialogProps{
    children:React.ReactNode
    isOpen: boolean,
    onClose?: ()=> void,
    title?: string,
}

const Dialog = ({ isOpen, onClose, title, children }:DialogProps) => {
    if (!isOpen) return null

    return (
      <div>
        <div>
          <h2>{title}</h2>
          <div>{children}</div>
          <button onClick={onClose}>Close</button>
        </div>
      </div>
    );
};
export default Dialog