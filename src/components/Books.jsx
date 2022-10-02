import React from "react";
import ReactDOM from "react-dom";

export default function Books({ clickHandler, bookCategory }) {
  return (
    <div className="">
      <button
        className={bookCategory === "coding" ? "active" : "btn"}
        onClick={clickHandler}
        value="coding"
      >
        Coding
      </button>
      <button
        className={bookCategory === "business" ? "active" : "btn"}
        onClick={clickHandler}
        value="business"
      >
        Business
      </button>
      <button
        className={bookCategory === "motivation" ? "active" : "btn"}
        onClick={clickHandler}
        value="motivation"
      >
        Motivation
      </button>
    </div>
  );
}
