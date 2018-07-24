import React from 'react';
import * as R from 'ramda';
import BookSummary from './BookSummary';
import BookSort from './BookSort';

const BookListSection = props => {
  const { books = [] } = props;
  return (
    <div className="fl w-70">
      <BookSort {...props} />
      {R.map(book => {
        return <BookSummary key={book.id} book={book} />;
      }, books)}
    </div>
  );
};

export default BookListSection;
