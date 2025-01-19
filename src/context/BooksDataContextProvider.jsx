import { useEffect, useState } from "react";
import { createContext } from "react";
import { fetchBooks } from "../services/book-services";

export const BooksDataContext = createContext(null);

const BooksDataContextProvider = ({ children }) => {
  const [booksData, setBooksData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetchBooks().then((data) => {
      console.log("data from fetch:", data);
      setBooksData(data);
      setIsLoading(false);
    });
  }, []);

  useEffect(() => {
    if (!isLoading) {
      console.log("books data after loading:", booksData);
    }
  }, [booksData, isLoading]);

  return (
    <BooksDataContext.Provider value={{ booksData, setBooksData }}>
      {children}
    </BooksDataContext.Provider>
  );
};

export default BooksDataContextProvider;
