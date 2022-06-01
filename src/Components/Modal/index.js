import React, { useState } from "react";
import Style from "./index.module.css";
import { AiOutlineClose } from "react-icons/ai";

export default function Modal({ btnName, title, style, content, isHide }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <button onClick={handleOpen} style={{ ...style, ...anotherCss }}>
        {btnName}
      </button>
      {open && (
        <div className={Style.mainContainer}>
          <div className={Style.container}>
            <div className={Style.header}>
              {!isHide && (
                <AiOutlineClose onClick={handleClose} className={Style.arrow} />
              )}
              <h1>{title}</h1>
            </div>
            <div className={Style.containContainer}>{content}</div>
          </div>
        </div>
      )}
    </>
  );
}
const anotherCss = {
  border: "none",
  fontSize: 14,
  fontWeight: "bold",
  textTransform: "uppercase",
};
