import BookCard from "../../components/BookCard/BookCard";
import { BooksDataContext } from "../../context/BooksDataContextProvider";
import { useContext } from "react";

const BookList = () => {
  const { booksData } = useContext(BooksDataContext);
  return booksData.map((book) => <BookCard key={book.id} data={book} />);
};

export default BookList;
