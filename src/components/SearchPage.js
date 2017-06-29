import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import BooksListDetail from './BooksListDetail';
import * as BooksAPI from '../BooksAPI';


class SearchPage extends Component {
  state = {
    books: []
  }
  
  componentDidMount() {
    BooksAPI.getAll().then(books => this.setState({ books }));
  }
    
  renderBooks() {
    return this.state.books.map((items, index) => {
      return <BooksListDetail key={index} books={items} />;
    }); 
  }
    
  render() {
      return (
        <div className="search-books">
          <div className="search-books-bar">
            <Link
              to='/'
              className='close-search'
            >
              Close
            </Link>
            <div className="search-books-input-wrapper">
              <input type="text" placeholder="Search by title or author"/>
            </div>
          </div>
          <div className="search-books-results">
            <ol className="books-grid">
            {this.renderBooks()}
            </ol>
          </div>
        </div>
      );
  }
}

export default SearchPage;