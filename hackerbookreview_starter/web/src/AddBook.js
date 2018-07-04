import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { BookSearchForm, BookSearchResults } from './components/Book';
import data from './data';

class AddBook extends Component {
  state = {
    term: '',
    results: [],
    redirectBookId: null,
  };
  handleChange = (field, value) => {
    this.setState({ [field]: value });
  };
  search = async e => {
    e.preventDefault();
    // eslint-disable-next-line
    const { term } = this.state;
    // TODO: fetch actual search results using graphql
    this.setState({ results: data.results });
  };
  addBook = async googleBookId => {
    // TODO: add mutation to add book using graphql
    this.setState({ redirectBookId: 1 });
  };
  render() {
    const { redirectBookId } = this.state;
    return (
      <div className="cf black-80 mv2">
        {redirectBookId && <Redirect to={`/book/${redirectBookId}`} />}
        <BookSearchForm
          search={this.search}
          handleChange={this.handleChange}
          term={this.state.term}
        />
        <BookSearchResults
          results={this.state.results}
          addBook={this.addBook}
        />
      </div>
    );
  }
}

export default AddBook;
