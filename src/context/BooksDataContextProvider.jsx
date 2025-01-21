import { useEffect, useState } from "react";
import { createContext } from "react";
import { fetchBooks } from "../services/book-services";

export const BooksDataContext = createContext(null);

const BooksDataContextProvider = ({ children }) => {
  const [booksData, setBooksData] = useState([]);

  return (
    <BooksDataContext.Provider value={{ booksData, setBooksData, fetchBooks }}>
      {children}
    </BooksDataContext.Provider>
  );
};

export default BooksDataContextProvider;
