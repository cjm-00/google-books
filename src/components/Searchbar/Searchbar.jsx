import { useContext, useState } from "react";
import classes from "./Searchbar.module.scss";
import { SearchContext } from "../../context/SearchContextProvider";

const Searchbar = () => {
  const { onSearch } = useContext(SearchContext);
  const [searchTerm, setSearchTerm] = useState("");
  const onInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const onSubmit = (e) => {
    console.log(searchTerm);
    onSearch(searchTerm);
    e.preventDefault();
    setSearchTerm("");
  };

  return (
    <form className={classes.Searchbar} onSubmit={onSubmit}>
      <input
        type="text"
        className={classes.input}
        placeholder="Search"
        onChange={onInputChange}
        value={searchTerm}
      />
      <button className={classes.searchButton}>Search</button>
    </form>
  );
};

export default Searchbar;
