import Card from "../../components/Card/Card";
import classes from "./CardContainer.module.scss";
import { fetchBooks } from "../../data/bookAPI";
import { useEffect, useState } from "react";

const CardContainer = ({ dataforRender }) => {
  // const [booksData, setBooksData] = useState([]);

  // useEffect(() => {
  //   console.log(bookArray);
  // }, []);
  // const bookArray = fetchBooks();

  return (
    <>
      <div className={classes.container}>
        <Card data={dataforRender} />
      </div>
    </>
  );
};

export default CardContainer;
