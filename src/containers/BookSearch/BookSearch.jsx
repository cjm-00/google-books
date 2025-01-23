import { useContext, useEffect, useState } from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import { BooksDataContext } from "../../context/BooksDataContextProvider";
import Message from "../../components/Message/Message";
import Loading from "../../components/Loading/Loading";
const BookSearch = () => {
  const [bookSearchTerm, setBookSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const handleSubmit = (searchTerm) => {
    setBookSearchTerm(searchTerm);
    setIsLoading(true);
    console.log(isLoading);
  };
  // console.log("searchterm:", bookSearchTerm);
  const { setBooksData, booksData, fetchBooks } = useContext(BooksDataContext);

  useEffect(() => {
    fetchBooks(bookSearchTerm).then((data) => {
      // console.log("data from fetch:", data);
      setBooksData(data);
      setIsLoading(false);
      console.log(isLoading);
    });
  }, [bookSearchTerm]);

  return (
    <>
      <SearchBar onSubmit={handleSubmit} />
      {/* <Loading /> */}
      {isLoading && <Loading />}
    </>
  );
};

export default BookSearch;
