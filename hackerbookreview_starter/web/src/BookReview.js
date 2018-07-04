import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import * as R from 'ramda';
import * as EmailValidator from 'email-validator';
import { Book, BookReviewForm } from './components/Book';
import data from './data';

const findBookById = (id, books) => R.find(R.propEq('id', id), books);

const isInputValid = reviewInput => {
  const { count, name, email } = reviewInput;
  return count > 0 && count < 6 && name && EmailValidator.validate(email);
};

class BookReview extends Component {
  state = {
    book: null,
    reviewInput: {
      count: 0,
      hoverCount: 0,
      name: '',
      email: '',
      title: '',
      comment: '',
    },
    redirect: false,
    inputValid: false,
  };
  async componentDidMount() {
    const id = R.path(['props', 'match', 'params', 'id'], this);
    // TODO: fetch actual book using graphql
    const book = findBookById(id, data.books);
    this.setState({ book });
  }
  handleChange = R.curry((field, value) => {
    const { reviewInput } = this.state;
    const updatedReviewInput = R.merge(reviewInput, { [field]: value });
    const inputValid = isInputValid(updatedReviewInput);
    this.setState({ reviewInput: updatedReviewInput, inputValid });
  });
  handleSubmit = async e => {
    e.preventDefault();
    const { book } = this.state;
    // eslint-disable-next-line
    const reviewInput = R.pipe(
      R.pathOr({}, ['reviewInput']),
      input => {
        const { name, count, email, title, comment } = input;
        return { name, email, title, comment, rating: count };
      },
      R.merge(R.__, { bookId: book.id }),
    )(this.state);
    // TODO: add actual mutation to add new review
    // this.setState({ redirect: !!id });
  };
  render() {
    const { book, reviewInput, inputValid, redirect } = this.state;
    if (!book) return null;
    return (
      <div className="cf black-80 mv2">
        {redirect && <Redirect to={`/book/${book.id}`} />}
        <h1 className="fw4 mt2 mb3 f2">Review</h1>
        <Book book={book} />
        <BookReviewForm
          book={book}
          reviewInput={reviewInput}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          inputValid={inputValid}
        />
      </div>
    );
  }
}

export default BookReview;
