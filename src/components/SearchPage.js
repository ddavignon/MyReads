import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import BooksListDetail from './BooksListDetail';
import * as BooksAPI from '../BooksAPI';


class SearchPage extends Component {
  state = {
      books: [],
      query: ''
  };

  componentDidMount() {
    BooksAPI.getAll().then(books => this.setState({ books }));
  }
    
  renderBooks(books) {
      if (books) {
          return books.map((item, index) => {
              return <BooksListDetail key={index} book={item}/>;
          });
      }
  }

  handleUpdateQuery(query) {
      this.setState({ query });
      BooksAPI.search(this.state.query)
          .then(books => books.error ? [] : this.setState({ books }))
          .catch(err => console.log('search error: ', err));
  }

  renderSearchResults() {
      console.log(this.state.query);
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
                {this.renderBooks(this.state.books)}
            </ol>
          </div>
        </div>
      );
  }
}

export default SearchPage;