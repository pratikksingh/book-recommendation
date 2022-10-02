import React from "react";
import ReactDOM from "react-dom";

export default function BookList({ bookCategory }) {
  const bookLibrary = {
    coding: [
      {
        name: "Eloquent JavaScript",
        rating: "4.2/5 - Goodreads",
        author: "Marijn Haverbeke",
      },
      {
        name: "You Don't Know JS",
        rating: "4.3/5 - Goodreads",
        author: "Kyle Simpson",
      },
    ],
    business: [
      {
        name: "Never Split the Difference",
        rating: "4.4/5 - Goodreads",
        author: "Christopher Voss and Tahl Raz",
      },
      { name: "Loonshots", rating: "4/5 Goodreads", author: "Safi Bahcall" },
    ],
    motivation: [
      {
        name: "The Pursuit of Happyness",
        rating: "4.2/5 - Goodreads",
        author: "Chris Gardner",
      },
      {
        name: "Atomic Habits by James Clear",
        rating: "4.4/5 - Goodreads",
        author: "James Clear",
      },
    ],
  };

  return (
    <div className="category">
      <h1 className="bookHeading">{bookCategory}</h1>
      {bookLibrary &&
        bookLibrary[bookCategory].map((book, id) => {
          return (
            <div key={id} className="bookDetails">
              <h4 className="bookName">{book.name}</h4>
              <p>Rating: {book.rating}</p>
              <p className="bookAuthor">Author: {book.author}</p>
            </div>
          );
        })}
    </div>
  );
}
