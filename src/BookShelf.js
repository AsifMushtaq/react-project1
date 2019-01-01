import React from "react";
import Book from "./Book";
import PropTypes from "prop-types";


const BookShelf = (props) => {
  const { books, title, onShelfChanged } = props;
   
  return (
    <div>
      <h2 className="bookshelf-title">{title}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books.map(book => (
            <li key={book.id}>
              <Book book={book} onShelfChanged={onShelfChanged}/>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}


BookShelf.propTypes = {
  books: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired
}

export default BookShelf;
