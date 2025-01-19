import { useContext, useState } from "react";
import classes from "./SearchBar.module.scss";

const SearchBar = () => {
  return (
    <form className={classes.Searchbar}>
      <input type="text" className={classes.input} placeholder="Search" />
      <button className={classes.searchButton}>Search</button>
    </form>
  );
};

export default SearchBar;
