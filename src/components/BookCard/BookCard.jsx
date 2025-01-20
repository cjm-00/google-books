import { useContext, useEffect, useState } from "react";
import { BooksDataContext } from "../../context/BooksDataContextProvider";
import classes from "./BookCard.module.scss";
import BookModal from "../BookModal/BookModal";

const BookCard = ({ data }) => {
  const { booksData } = useContext(BooksDataContext);
  let filledStars = "";
  let emptyStars = "";

  if (data.rating === 5) {
    filledStars = "★★★★★";
    emptyStars = "";
  } else if (data.rating >= 4) {
    filledStars = "★★★★";
    emptyStars = "★";
  } else if (data.rating >= 3) {
    filledStars = "★★★";
    emptyStars = "★★";
  } else if (data.rating >= 2) {
    filledStars = "★★";
    emptyStars = "★★★";
  } else if (data.rating >= 1) {
    filledStars = "★";
    emptyStars = "★★★★";
  } else if ((data.rating = "--")) {
    filledStars = "";
    emptyStars = "";
  } else {
    filledStars = "";
    emptyStars = "★★★★★";
  }

  const [isOpen, setIsOpen] = useState(false);
  const onClose = () => {
    setIsOpen(false);
  };

  const onOpen = () => {
    setIsOpen(true);
  };

  // useEffect(() => {
  //   console.log("is open:", isOpen);
  // }, [isOpen]);

  // console.log(booksData);
  return (
    <>
      <div className={classes.card}>
        <img className={classes.cover} src={data.cover} />
        <h2 className={classes.title}>{data.title}</h2>
        <h3 className={classes.author}>{data.author}</h3>
        <div className={classes.rating}>
          <h3 className={classes.ratingNumbers}>Avg Rating: {data.rating}</h3>
          <div className={classes.stars}>
            <h3 className={classes.filledStars}>{filledStars}</h3>
            <h3 className={classes.emptyStars}>{emptyStars}</h3>
          </div>
        </div>
        <h4 className={classes.more} onClick={onOpen}>
          Click for details
        </h4>
      </div>
      {isOpen && <BookModal data={data} onClose={onClose} />}
    </>
  );
};

export default BookCard;
