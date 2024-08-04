import React from "react";
import '../stylesheets/searchBar.css'
function SearchBar({ searchChange }) {
  return (
    <>
      <div className="d-flex align-items-center rounded-2 py-2 searchbar-container">
      <i className="fa-solid fa-magnifying-glass"></i>
      <input
        style={styles.input}
        className="ms-2"
        placeholder="Search for conversation"
        onChange={searchChange}
      ></input>
      </div>
    </>
  );
}
const styles = {
  input: {
    backgroundColor:"transparent",
    width: "100%",
    outline: "none",
    margin: "auto",
    padding: "5px",
    border:"none",
  },
};
export default SearchBar;