import React from 'react';
import * as BooksAPI from './BooksAPI';
import Book from './Book';
import { Link } from 'react-router-dom'

class Search extends React.Component {
    state = {
      searchResults: []
    }

    search = (e) => {
      const query = e.target.value;

      if (query){
        BooksAPI.search(query, 25)
          .then(searchResults => {
            
            if (!searchResults || searchResults.error) {
              this.setState({searchResults: []});
              return;
            }

            searchResults = searchResults.map((book) => {
              book.shelf = this.getShelf(book);
              return book;
            });

            this.setState({searchResults});
          })
      } else {
        this.setState({ searchResults: [] });
      }
    }
    
    getShelf = (book) => {
      var existingBook = this.props.books.find(c => c.id === book.id);
      return  existingBook ? existingBook.shelf : "none";
    }

    render() {
      const { onShelfChanged } = this.props;

      return (
            <div className="search-books">
            <div className="search-books-bar">
              <Link className="close-search" to="/">Close</Link>
              <div className="search-books-input-wrapper">
                {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                <input type="text" placeholder="Search by title or author" onChange={this.search}/>

              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid">
                {
                   this.state.searchResults && this
                    .state
                    .searchResults
                    .map((book, index) => (
                        <li key={book.id + index}>
                            <Book book={book} onShelfChanged={onShelfChanged}/>
                        </li>
                    ))
                }
              </ol>
            </div>
          </div>
        );
    }
}

export default Search;