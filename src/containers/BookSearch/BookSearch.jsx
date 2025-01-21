import { useContext, useEffect, useState } from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import { BooksDataContext } from "../../context/BooksDataContextProvider";

const BookSearch = () => {
  const [bookSearchTerm, setBookSearchTerm] = useState("");
  const handleSubmit = (searchTerm) => {
    setBookSearchTerm(searchTerm);
  };
  console.log("searchterm:", bookSearchTerm);
  const { setBooksData, booksData, fetchBooks } = useContext(BooksDataContext);

  useEffect(() => {
    fetchBooks(bookSearchTerm).then((data) => {
      // console.log("data from fetch:", data);
      setBooksData(data);
    });
  }, [bookSearchTerm]);

  return (
    <>
      <SearchBar onSubmit={handleSubmit} />
    </>
  );
};

export default BookSearch;
