import React from "react";
import Book from "./Book";
import PropTypes from "prop-types";

class BookShelf extends React.Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    bookShelf: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
  };

  render() {
    const { books, bookShelf, title, onShelfChanged } = this.props;
    const showingBooks = books.filter(book => book.shelf === bookShelf);
    return (
      <div>
        <h2 className="bookshelf-title">{title}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {showingBooks.map(book => (
              <li key={book.id}>
                <Book book={book} onShelfChanged={onShelfChanged}/>
              </li>
            ))}
          </ol>
        </div>
      </div>
    );
  }
}

export default BookShelf;
