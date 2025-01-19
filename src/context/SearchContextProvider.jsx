import { useState } from "react";
import { createContext } from "react";

export const SearchContext = createContext(null);

const SearchContextProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const onSearch = (value) => {
    setSearchTerm(value);
  };

  return (
    <SearchContext.Provider value={{ searchTerm, setSearchTerm, onSearch }}>
      {children}
    </SearchContext.Provider>
  );
};

export default SearchContextProvider;
