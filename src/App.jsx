import { useEffect, useState } from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import SearchBar from "./components/SearchBar/SearchBar";
import Message from "./components/Message/Message";
import BooksDataContextProvider from "./context/BooksDataContextProvider";
import BookList from "./containers/BookList/BookList";
// import { onSubmit } from "./components/Searchbar/Searchbar";

function App() {
  return (
    <>
      <BooksDataContextProvider>
        <Header />
        <SearchBar />
        {/* <Message /> */}
        <BookList />
      </BooksDataContextProvider>
    </>
  );
}

export default App;
