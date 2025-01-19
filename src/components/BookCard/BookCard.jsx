import { BooksDataContext } from "../../context/BooksDataContextProvider";
import classes from "./BookCard.module.scss";

const BookCard = ({ BooksDataContext }) => {
  console.log(booksData);
  return (
    <>
      {/* <div className={classes.card}>
        <h2 className={classes.title}>The Color of Magic</h2>
        <h3 className={classes.author}>Terry Pratchett</h3>
        <div className={classes.rating}>
          <div className={classes.stars}>
            <h3 className={classes.filledStars}>★★★</h3>
            <h3 className={classes.emptyStars}>★★</h3>
          </div>
          <h3 className={classes.ratingNumbers}>3.4 / 5</h3>
        </div>
        <h4 className={classes.more}>Click for details</h4>
      </div> */}

      <div className={classes.card}>
        <h2 className={classes.title}>The Color of Magic</h2>
        <h3 className={classes.author}>Terry Pratchett</h3>
        <div className={classes.rating}>
          <div className={classes.stars}>
            <h3 className={classes.filledStars}>★★★</h3>
            <h3 className={classes.emptyStars}>★★</h3>
          </div>
          <h3 className={classes.ratingNumbers}>3.4 / 5</h3>
        </div>
        <h4 className={classes.more}>Click for details</h4>
      </div>
    </>
  );
};

export default BookCard;
