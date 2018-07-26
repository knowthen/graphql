import React from 'react';
import * as R from 'ramda';
import { Review } from '../Review';

const BookDetail = props => {
  const { book } = props;
  if (!book) return null;
  const { title, description, imageUrl, rating } = book;
  const authors = R.pipe(
    R.pathOr([], ['authors']),
    R.map(R.prop('name')),
    R.join(', '),
  )(book);
  return (
    <div className="cf">
      <img className="fl w5" src={imageUrl} alt="book cover" />
      <div className="ml2 w-70 fl">
        <h1 className="fw3 mt0 mb2 truncate f2 w-100">{title}</h1>
        <h4 className="mv2 fw3 f3 w-100">{authors}</h4>
        <Review count={rating} className="mv2 gold f4 w-100" />
        <p className="lh-copy measure mv2 f4">{description}</p>
      </div>
    </div>
  );
};

export default BookDetail;
