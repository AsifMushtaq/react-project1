import React from 'react'
import BookShelf from './BookShelf'
import {Link} from 'react-router-dom'

class ListBooks extends React.Component {

    render () {
        const { books, onShelfChanged } = this.props;

        return (
            <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <BookShelf books={books} onShelfChanged={onShelfChanged} bookShelf='currentlyReading' title='Currently Reading' />
                <BookShelf books={books} onShelfChanged={onShelfChanged} bookShelf='wantToRead' title='Want To Read' />
                <BookShelf books={books} onShelfChanged={onShelfChanged} bookShelf='read' title='Read' />
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