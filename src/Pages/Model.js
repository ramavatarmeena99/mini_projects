import React from "react";
import Modal from "../Components/Modal";

const btnFist = {
  backgroundColor: "red",
  color: "white",
};
const btnSecond = { backgroundColor: "gold", color: "black" };

export function Section1() {
  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          height: "auto",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <input
          style={{
            width: "250px",
            height: "40px",
            paddingLeft: "10px",
            fontSize: "15px",
          }}
          type="text"
          placeholder="Enter Mobile Number"
        ></input>
        <input
          style={{
            width: "250px",
            height: "40px",
            marginTop: "20px",
            paddingLeft: "10px",
            fontSize: "15px",
          }}
          type="text"
          placeholder="Enter Referral Code (Optional)"
        ></input>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          height: "auto",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <button onClick={clickHandlerFirstAlert}>SUBMIT</button>
      </div>
    </div>
  );
}

export function Section2() {
  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          height: "auto",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <input
          style={{
            width: "250px",
            height: "40px",
            paddingLeft: "10px",
            fontSize: "15px",
          }}
          type="text"
          placeholder="Enter In-Game Name"
        ></input>
        <input
          style={{
            width: "250px",
            height: "40px",
            marginTop: "20px",
            paddingLeft: "10px",
            fontSize: "15px",
          }}
          type="text"
          placeholder="Enter Game ID"
        ></input>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          height: "auto",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <button onClick={clickHandlerSecondAlert}>GET START</button>
      </div>
    </div>
  );
}
const clickHandlerFirstAlert = () => {
  alert("Login successfully");
};
const clickHandlerSecondAlert = () => {
  alert("SignUp successfully");
};

export default function Model() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        width: "100%",
        height: "100vh",
        backgroundColor: "#121212",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Modal
        btnName="Login"
        title="LOGIN"
        style={btnFist}
        btnText="GET START"
        clickHandler={clickHandlerFirstAlert}
        content={<Section1 />}
      />

      <Modal
        btnName="SignUp"
        title="SIGNUP"
        style={btnSecond}
        clickHandler={clickHandlerSecondAlert}
        btnText="SUBMIT"
        content={<Section2 />}
      />
    </div>
  );
}
