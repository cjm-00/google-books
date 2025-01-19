import { useContext } from "react";
import { BooksDataContext } from "../../context/BooksDataContextProvider";
import classes from "./BookCard.module.scss";

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
  } else {
    filledStars = "";
    emptyStars = "★★★★★";
  }

  // console.log(booksData);
  return (
    <>
      <div className={classes.card}>
        <img className={classes.cover} src={data.cover} />
        <h2 className={classes.title}>{data.title}</h2>
        <h3 className={classes.author}>{data.author}</h3>
        <div className={classes.rating}>
          <div className={classes.stars}>
            <h3 className={classes.filledStars}>{filledStars}</h3>
            <h3 className={classes.emptyStars}>{emptyStars}</h3>
          </div>
          <h3 className={classes.ratingNumbers}>{data.rating} / 5</h3>
        </div>
        <h4 className={classes.more}>Click for details</h4>
      </div>
    </>
  );
};

export default BookCard;
