import classes from "./CatalogueBody.module.scss";

const CatalogueBody = ({ children }) => {
  return <div className={classes.body}>{children}</div>;
};

export default CatalogueBody;
