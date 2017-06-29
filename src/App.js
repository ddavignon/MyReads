import React from 'react';
import { Route } from 'react-router-dom';
import SearchPage from './components/SearchPage';
import BooksList from './components/BooksList';
import * as BooksAPI from './BooksAPI';
import './App.css';

class BooksApp extends React.Component {
  render() {
    return (
      <div className="app">
        <Route path="/search" component={SearchPage}/>
        <Route path="/books" component={BooksList} />
      </div>
    )
  }
}

export default BooksApp
