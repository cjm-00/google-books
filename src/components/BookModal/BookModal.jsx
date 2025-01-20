import classes from "./BookModal.module.scss";
import { useContext, useState } from "react";
import { BooksDataContext } from "../../context/BooksDataContextProvider";
const BookModal = ({ data, onClose, filledStars, emptyStars }) => {
  const { booksData } = useContext(BooksDataContext);

  //   console.log(data.title);
  return (
    <>
      <div className={classes.modal}>
        <img className={classes.cover} src={data.cover} />
        <div className={classes.details}>
          <button className={classes.close} onClick={onClose}>
            X
          </button>

          <h1 className={classes.title}>{data.title}</h1>
          <h3>Author: {data.author}</h3>
          <h3>Rating: {data.rating}</h3>
          <h3>Category: {data.categories}</h3>
          <h3>Pages: {data.pages}</h3>
          <h3>Published: {data.date}</h3>
          <h3>Publisher: {data.publisher}</h3>
          <p className={classes.description}>{data.description}</p>
        </div>
      </div>
    </>
  );
};

export default BookModal;
