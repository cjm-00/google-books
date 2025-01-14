import classes from "./Searchbar.module.scss";

const Searchbar = () => {
  return (
    <div className={classes.Searchbar}>
      <input type="text" className={classes.input} placeholder="Search" />
      <button className={classes.searchButton}>Search</button>
    </div>
  );
};

export default Searchbar;
