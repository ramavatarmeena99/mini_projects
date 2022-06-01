import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Modal from "../Components/Modal";
import Style from "./index.module.css";
export default function Tab() {
  const data = [
    { id: 1, name: "UPCOMING" },
    { id: 2, name: "JOINED" },
    { id: 3, name: "HISTORY" },
  ];

  const tabIndex = parseInt(localStorage.getItem("tabIndex"));

  const [selectedId, setSelectedId] = useState(tabIndex || 1);

  const Navigate = useNavigate();

  const tabHandler = (item) => {
    setSelectedId(item.id);
    Navigate(`/tab/${item.name}`);

    // set tab index
    localStorage.setItem("tabIndex", item.id);
  };

  return (
    <>
      <div className={Style.main}>
        <div className={Style.changeTabBackgroundColor}>
          {data.map((item, index) => {
            const isActiveTab = selectedId === item.id;

            return (
              <div
                onClick={() => tabHandler(item)}
                key={index}
                style={isActiveTab ? activeCss : {}}
                className={Style.tabColor}
              >
                <p>{item.name}</p>
              </div>
            );
          })}
        </div>
        <div className={Style.handler}>
          {selectedId === 1 && <h2>TAB NO AUTH 1</h2>}

          {selectedId === 2 && (
            <>
              <Modal
                title="LOGIN"
                content="THIS IS CONTENT"
                style={{ backgroundColor: "green" }}
                btnName="Login"
                // isHide={true}
              />
            </>
          )}

          {selectedId === 3 && <h2>TAB NO AUTH 3</h2>}
        </div>
      </div>
    </>
  );
}

let activeCss = {
  backgroundColor: "green",
  color: "white",
};
