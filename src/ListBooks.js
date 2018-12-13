import React from 'react'
import BookShelf from './BookShelf'
import {Link} from 'react-router-dom'

class ListBooks extends React.Component {
  shelfBooks = (bookShelf) => this.props.books.filter(book => book.shelf === bookShelf);
    render () {
        const { books, onShelfChanged } = this.props;

        return (
            <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <BookShelf books={this.shelfBooks('currentlyReading')} onShelfChanged={onShelfChanged} title='Currently Reading' />
                <BookShelf books={this.shelfBooks('wantToRead')} onShelfChanged={onShelfChanged} title='Want To Read' />
                <BookShelf books={this.shelfBooks('read')} onShelfChanged={onShelfChanged} title='Read' />
              </div>
            </div>
            <div className="open-search">
              <Link to="/search">Add a book</Link>
            </div>
          </div>
        );
    }
}

export default ListBooks;