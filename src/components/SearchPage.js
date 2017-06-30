import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import BooksListDetail from './BooksListDetail';
import * as BooksAPI from '../BooksAPI';


class SearchPage extends Component {
  state = {
      books: [],
      query: ''
  };

  handleUpdateQuery(query) {
      BooksAPI.search(query)
          .then(books => books ? this.setState({ books }) : [])
          .catch(err => console.log('search error: ', err));
      this.setState({ query });
  }

  renderSearchResults() {
      const {books, query} = this.state;

      if (query) {
          return books.error ?
              <div>No results found</div>
              : books.map((item, index) => {
                  return <BooksListDetail key={index} book={item}/>;
              });
      }
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
              <input
                  type="text"
                  placeholder="Search by title or author"
                  value={this.state.query}
                  onChange={e => this.handleUpdateQuery(e.target.value)}
              />
            </div>
          </div>
          <div className="search-books-results">
            <ol className="books-grid">
                {this.renderSearchResults()}
            </ol>
          </div>
        </div>
      );
  }
}

export default SearchPage;