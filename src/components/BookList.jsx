import React from "react";
import ReactDOM from "react-dom";

export default function BookList({ bookCategory }) {
  const bookLibrary = {
    coding: [
      {
        name: "Eloquent JavaScript",
        rating: "4.2/5 - Goodreads",
        author: "Marijn Haverbeke",
        description:
          "This is a book about JavaScript, programming, and the wonders of the digital.",
      },
      {
        name: "You Don't Know JS",
        rating: "4.3/5 - Goodreads",
        author: "Kyle Simpson",
        description:
          "This is a series of books diving deep into the core mechanisms of the JavaScript language.",
      },
    ],
    business: [
      {
        name: "Never Split the Difference",
        rating: "4.4/5 - Goodreads",
        author: "Christopher Voss and Tahl Raz",
        description:
          "Never Split the Difference is a riveting, indispensable handbook of negotiation principles culled and perfected from Chris Voss's remarkable career.",
      },
      {
        name: "Loonshots",
        rating: "4/5 Goodreads",
        author: "Safi Bahcall",
        description:
          "How to Nurture the Crazy Ideas That Win Wars, Cure Diseases, and Transform Industries.",
      },
    ],
    motivation: [
      {
        name: "The Pursuit of Happyness",
        rating: "4.2/5 - Goodreads",
        author: "Chris Gardner",
        description:
          "It's a fascinating tale of a single-parent black male aspiring to become a renowned stock broker on Wall Street.",
      },
      {
        name: "Atomic Habits by James Clear",
        rating: "4.4/5 - Goodreads",
        author: "James Clear",
        description:
          "An Easy & Proven Way to Build Good Habits & Break Bad Ones.",
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
              <p className="bookDescription">Description: {book.description}</p>
            </div>
          );
        })}
    </div>
  );
}
