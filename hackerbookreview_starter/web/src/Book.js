import React, { Component } from 'react';
import * as R from 'ramda';
import { BookDetail } from './components/Book';
import { BookDetailReviews } from './components/Book';
import data from './data';

const findBookById = (id, books) => R.find(R.propEq('id', id), books);

class Book extends Component {
  state = {
    book: null,
  };
  async componentDidMount() {
    const id = R.path(['props', 'match', 'params', 'id'], this);
    // TODO: fetch actual book using graphql
    const book = findBookById(id, data.books);
    this.setState({ book });
  }
  render() {
    const { book } = this.state;
    if (!book) return null;
    const reviews = R.pathOr([], ['state', 'book', 'reviews'], this);

    return (
      <div className="cf black-80 mv2">
        <BookDetail book={book} />
        <BookDetailReviews bookId={book.id} reviews={reviews} />
      </div>
    );
  }
}

export default Book;
