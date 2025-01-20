import { useContext, useState } from "react";
import classes from "./SearchBar.module.scss";

const SearchBar = ({ onSubmit }) => {
  const [inputText, setInputText] = useState("");

  const onChange = (e) => {
    setInputText(e.target.value);
  };
  const submitSearch = (e) => {
    e.preventDefault();
    onSubmit(inputText);
    setInputText("");
  };

  return (
    <form className={classes.Searchbar} onSubmit={submitSearch}>
      <input
        type="text"
        className={classes.input}
        placeholder="Search"
        value={inputText}
        onChange={onChange}
      />
      <button className={classes.searchButton}>Search</button>
    </form>
  );
};

export default SearchBar;
