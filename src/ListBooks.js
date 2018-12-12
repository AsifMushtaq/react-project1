import React from 'react'
import BookShelf from './BookShelf'

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
              <a onClick={() => {
                this.setState({ showSearchPage: true });
                console.log(this.state)}}>Add a book</a>
            </div>
          </div>
        );
    }
}

export default ListBooks;