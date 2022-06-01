import React from "react";
import { Link } from "react-router-dom";

export default function MiniProjects() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "100vh",
        backgroundColor: "#000000",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div>
        <p
          style={{
            paddingBottom: "100px",
            fontSize: "40px",
            color: "white",
            fontWeight: "bold",
          }}
        >
          Mini-Projects
        </p>
      </div>
      <div>
        <nav
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <div
            style={{
              width: "auto",
              height: "40px",
              backgroundColor: "#121212",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "10px",
              padding: "0px 30px",
            }}
          >
            <Link
              style={{
                color: "white",
              }}
              to="tab"
            >
              Tab
            </Link>
          </div>
          <div
            style={{
              width: "auto",
              height: "40px",
              backgroundColor: "#121212",
              marginLeft: "10px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "10px",
              padding: "0px 30px",
            }}
          >
            <Link
              style={{
                color: "white",
              }}
              to="data"
            >
              Data
            </Link>
          </div>
          <div
            style={{
              width: "auto",
              height: "40px",
              backgroundColor: "#121212",
              marginLeft: "10px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "10px",
              padding: "0px 30px",
            }}
          >
            <Link
              style={{
                color: "white",
              }}
              to="progressbar"
            >
              ProgressBar
            </Link>
          </div>
          <div
            style={{
              width: "auto",
              height: "40px",
              backgroundColor: "#121212",
              marginLeft: "10px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "10px",
              padding: "0px 30px",
            }}
          >
            <Link
              style={{
                color: "white",
              }}
              to="carousel"
            >
              Carousel
            </Link>
          </div>
          <div
            style={{
              width: "auto",
              height: "40px",
              backgroundColor: "#121212",
              marginLeft: "10px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "10px",
              padding: "0px 30px",
            }}
          >
            <Link
              style={{
                color: "white",
              }}
              to="model"
            >
              Model
            </Link>
          </div>
          <div
            style={{
              width: "auto",
              height: "40px",
              backgroundColor: "#121212",
              marginLeft: "10px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "10px",
              padding: "0px 30px",
            }}
          >
            <Link
              style={{
                color: "white",
              }}
              to="parallelogram"
            >
              Parallelogram
            </Link>
          </div>
        </nav>
      </div>
    </div>
  );
}
