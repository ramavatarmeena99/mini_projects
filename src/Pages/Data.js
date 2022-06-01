import React, { useState } from "react";
import Style from "./index.module.css";
import { dataForFilters } from "./UsersData";

export default function Data() {
  const [searchInput, setSearchInput] = useState("");
  const [filterResult, setFilterResult] = useState([]);
  const [gender, setGender] = useState("");

  //   const [query, setQuery] = useState("");

  //   const search = (e) => {
  //     setSearchInput(e.target.value);
  //     if (searchInput !== "") {
  //       const filterData = dataForFilters.filter((item) => {
  //         return Object.values(item)
  //           .join("")
  //           .toLowerCase()
  //           .includes(searchInput.toLowerCase());
  //       });
  //       setFilterResult(filterData);
  //     } else {
  //       setFilterResult(dataForFilters);
  //     }
  //   };

  const search = (e) => {
    setSearchInput(e.target.value);
    if (searchInput !== "") {
      const filterData = dataForFilters.filter((item) => {
        return Object.values(item)
          .join("")
          .toLowerCase()
          .includes(searchInput.toLowerCase());
      });

      setFilterResult(filterData);
    } else {
      setFilterResult(dataForFilters);
    }
  };
  const selectGender = (e) => {
    setGender(e.target.value);
    // console.log(e.target.value);
    setSearchInput(e.target.value);
    if (e.target.value !== "select") {
      const filterData = dataForFilters.filter((item) => {
        return (
          Object.values(item.gender).join("").toLowerCase() ===
          e.target.value.toLowerCase()
        );
      });

      setFilterResult(filterData);
    } else {
      setFilterResult(dataForFilters);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "auto",
        backgroundColor: "white",
      }}
    >
      <div
        className={Style.SearchCounter}
        style={{ backgroundColor: "white", borderBottom: "1px solid black" }}
      >
        <input
          style={{ width: "300px", height: "50px", fontSize: "17px" }}
          type="text"
          placeholder="search"
          //   value={query}
          onChange={search}
        ></input>

        <button className={Style.filterButton}>search</button>
        <div>
          <select
            value={gender}
            onChange={selectGender}
            style={{
              width: "100px",
              height: "30px",
              fontSize: "17px",
              backgroundColor: "#212121",
              color: "white",
            }}
          >
            <option value="select">select</option>
            <option value="female">female</option>
            <option value="male">male</option>
          </select>
        </div>
      </div>

      {/* <div className={Style.details}>
        <h5>NAME</h5>
        <h5>NAME</h5>
        <h5>NAME</h5>
      </div> */}

      <div>
        {searchInput.length > 1
          ? filterResult.map((item, index) => {
              return (
                <div
                  key={index}
                  style={{ display: "flex", paddingTop: "10px" }}
                >
                  <table style={{ width: "100%" }}>
                    <tr>
                      <div className={Style.userdetails}>
                        <th>{item.first_name}</th>
                        <th>{item.last_name}</th>
                      </div>
                      <th>{item.email}</th>
                      <th>{item.gender}</th>
                    </tr>
                  </table>
                </div>
              );
            })
          : dataForFilters.map((item, index) => {
              return (
                <div
                  key={index}
                  style={{ display: "flex", paddingTop: "10px" }}
                >
                  <table style={{ width: "100%" }}>
                    <tr>
                      <div className={Style.userdetails}>
                        <th>{item.first_name}</th>
                        <th>{item.last_name}</th>
                      </div>
                      <th>{item.email}</th>
                      <th>{item.gender}</th>
                    </tr>
                  </table>
                </div>
              );
            })}
      </div>
    </div>
  );
}
