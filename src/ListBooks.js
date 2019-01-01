import React from 'react'
import BookShelf from './BookShelf'
import { Link } from 'react-router-dom'

const ListBooks = (props) => {
  const shelfBooks = (bookShelf) => props.books.filter(book => book.shelf === bookShelf);
  const { onShelfChanged } = props;

  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          <BookShelf books={shelfBooks('currentlyReading')} onShelfChanged={onShelfChanged} title='Currently Reading' />
          <BookShelf books={shelfBooks('wantToRead')} onShelfChanged={onShelfChanged} title='Want To Read' />
          <BookShelf books={shelfBooks('read')} onShelfChanged={onShelfChanged} title='Read' />
        </div>
      </div>
      <div className="open-search">
        <Link to="/search">Add a book</Link>
      </div>
    </div>
  );
  
}

export default ListBooks;