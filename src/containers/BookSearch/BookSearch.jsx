import { useState } from "react";
import SearchBar from "../../components/SearchBar/SearchBar";

const BookSearch = () => {
  const [bookSearchTerm, setBookSearchTerm] = useState("");
  const handleSubmit = (searchTerm) => {
    setBookSearchTerm(searchTerm);
  };
  console.log("searchterm:", bookSearchTerm);

  return (
    <>
      <SearchBar onSubmit={handleSubmit} />
    </>
  );
};

export default BookSearch;
