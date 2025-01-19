import { useEffect, useState } from "react";

import "./App.scss";
import Header from "./components/Header/Header";
import Searchbar from "./components/Searchbar/Searchbar";
import Message from "./components/Message/Message";
import Card from "./components/Card/Card";
import CardContainer from "./containers/CardContainer/CardContainer";
import { fetchBooks } from "./data/bookAPI";
import SearchContextProvider from "./context/SearchContextProvider";
// import { onSubmit } from "./components/Searchbar/Searchbar";

function App() {
  const [booksData, setBooksData] = useState(null);

  // useEffect(() => {
  //   setBooksData(fetchBooks());
  // }, [onSubmit]);
  // console.log(booksData, "data from app");
  return (
    <>
      <SearchContextProvider>
        <Header />
        <Searchbar />
        {/* <Message /> */}
        <CardContainer dataforRender={booksData} />
      </SearchContextProvider>
    </>
  );
}

export default App;
