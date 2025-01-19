import BookCard from "../../components/BookCard/BookCard";
import classes from "./BookList.module.scss";

const BookList = () => {
  return (
    <>
      <div className={classes.list}>
        <BookCard />
      </div>
    </>
  );
};

export default BookList;
