import Header from "./components/Header";
import Books from "./components/Books";
import BookList from "./components/BookList";
import { useState } from "react";
import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

export default function App() {
  const [bookCategory, setBookCategory] = useState("coding");

  const clickHandler = (e) => {
    const data = e.target.value;
    setBookCategory(data);
  };
  return (
    <div className="App">
      <Header />
      <Books bookCategory={bookCategory} clickHandler={clickHandler} />
      <BookList bookCategory={bookCategory} />
    </div>
  );
}
