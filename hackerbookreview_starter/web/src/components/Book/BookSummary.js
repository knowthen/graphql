import React from 'react';
import * as R from 'ramda';
import { Link } from 'react-router-dom';
import { Review } from '../Review';
import { truncate } from '../../util';

const BookSummary = ({ book }) => {
  const { id, title, imageUrl, rating, description } = book;
  const authors = R.pipe(
    R.pathOr([], ['authors']),
    R.map(R.prop('name')),
    R.join(', '),
  )(book);
  return (
    <div className="mv3 pb2 bb b--black-10">
      <div className="flex mt2">
        <div className="w-20">
          <Link to={`/book/${id}`}>
            <img alt="book cover" src={imageUrl} />
          </Link>
        </div>
        <div className="w-80 pl2 ">
          <Link className="link black-80" to={`/book/${id}`}>
            <h2 className="fw3 mv0 truncate f2">{title}</h2>
          </Link>
          <h4 className="mv1 fw3 f4">{authors}</h4>
          <div className="mv1 gold f5">
            <Review count={rating} className="mv1 gold f5" />
          </div>
          <div className="mv1 measure lh-copy">
            {truncate(140, description)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookSummary;
