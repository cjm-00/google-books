import classes from "./Header.module.scss";

const Header = () => {
  return (
    <div className={classes.header}>
      <h1 className={classes.heading}>BOOKS CATALOGUE</h1>
      <h3 className={classes.subheading}>
        Search for books online using the Google Books API
      </h3>
    </div>
  );
};

export default Header;
