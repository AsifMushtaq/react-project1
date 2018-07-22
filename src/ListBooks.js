import React from 'react'
import BookShelf from './BookShelf'
import * as BooksAPI from './BooksAPI'

class ListBooks extends React.Component {
    state = {
        books: []
    }

    componentDidMount() {
        BooksAPI.getAll()
          .then((books) => {
            this.setState(() => ({
                books
            }))
          })
      }

    render () {
        const { books } = this.state;

        return (
            <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <BookShelf books={books} bookShelf='currentlyReading' title='Currently Reading' />
                <BookShelf books={books} bookShelf='wantToRead' title='Want To Read' />
                <BookShelf books={books} bookShelf='read' title='Read' />
              </div>
            </div>
            <div className="open-search">
              <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
            </div>
          </div>
        );
    }
}

export default ListBooks;