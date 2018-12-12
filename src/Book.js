import React from "react";

class Book extends React.Component {
  ChangeShelf = (e) => {
    const shelf = e.target.value;
    var book = this.props.book;
    console.log(book);
    console.log(shelf);
    this.props.onShelfChanged(book, shelf);
  };    
  
  render() {
    const { book } = this.props;
    let backgroundImage = book.imageLinks ?
    `url(${book.imageLinks.smallThumbnail})` : 
    `url(https://cdn.pixabay.com/photo/2018/01/03/09/09/book-3057902_960_720.png)`;

    return (
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"         
            style={{
              width: 128,
              height: 193,
              backgroundImage:backgroundImage             
            }}
          />
          <div className="book-shelf-changer">
            <select value={book.shelf} onChange={this.ChangeShelf}>
              <option value="none" disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">{book.authors}</div>
      </div>
    );
  }
}

export default Book;
