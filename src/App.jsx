import { useState } from "react";

import "./App.scss";
import Header from "./components/Header/Header";
import Searchbar from "./components/Searchbar/Searchbar";
import Message from "./components/Message/Message";

function App() {
  return (
    <>
      <Header />
      <Searchbar />
      <Message />
    </>
  );
}

export default App;
