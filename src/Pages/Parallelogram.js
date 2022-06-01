import React from "react";
import Style from "./index.module.css";

export default function Parallelogram() {
  return (
    <div className={Style.parallelogram}>
      <div className={Style.inputField}>
        <input
          className={Style.inputFieldForparallelogram}
          type="text"
          placeholder="Enter Your Name"
        ></input>
      </div>
    </div>
  );
}
