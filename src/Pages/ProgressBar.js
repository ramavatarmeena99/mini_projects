import React, { useState } from "react";

export default function ProgressBar() {
  const [progress, setProgress] = useState();
  const progressStart = (e) => {
    setProgress(e.target.value);
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "100vh",
        backgroundColor: "#121212",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <input
        style={{
          width: "20%",
          height: "50px",
          paddingLeft: "10px",
        }}
        placeholder="Enter Value....."
        type="text"
        onChange={progressStart}
      ></input>

      <label for="file" style={{ color: "white" }}>
        Progress......
      </label>
      <progress id="file" value={progress} max="100">
        {progress}
      </progress>
    </div>
  );
}
