import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Search from './Search'
import ListBooks from './ListBooks'



class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false,
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

  onShelfChange = (book, shelf) => {
    book.shelf = shelf
    this.setState(state => ({
      books: state
        .books
        .filter(b => b.id !== book.id)
        .concat([book])
    }))
    BooksAPI.update(book, shelf)
  }

  render() {
    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <Search books={this.state.books}/>
        ) : (
          <ListBooks books={this.state.books} onShelfChanged={this.onShelfChange}/>
        )}
      </div>
    )
  }
}

export default BooksApp
