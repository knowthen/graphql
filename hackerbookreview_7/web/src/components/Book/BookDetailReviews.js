import React from 'react';
import * as R from 'ramda';
import { Link } from 'react-router-dom';
import { Review } from '../Review';

const BookDetailReview = props => {
  const { review } = props;
  if (!review) return null;
  const { id, title, comment, rating, user = {} } = review;
  const { imageUrl, name } = user;

  return (
    <li name={`comment-${id}`} className="mb3 pb3 bb b--black-10">
      <div>
        <div className="flex items-center mv1">
          <img className="mr2 br-100" src={imageUrl} alt="profile" />
          <span className="i f4 fw5">{name}</span>
        </div>
        <div className="flex mv1 items-center">
          <Review count={rating} className="mv1 gold f5 mr2" />
          <span className="f5 fw5">{title}</span>
        </div>
        <p className="f4 measure mv1 lh-copy">{comment}</p>
      </div>
    </li>
  );
};

const BookDetailReviews = props => {
  const { reviews, bookId } = props;
  if (!reviews) return null;

  return (
    <div>
      <div className="mv3 flex items-center">
        <h2 className="mv0 fw4 f3 dib w5">Reviews</h2>
        <Link
          to={`/book/${bookId}/review/`}
          className="f4 fw4 link dim br1 ba ph3 pv2 dib black-80 tc"
        >
          Add A Review
        </Link>
      </div>
      <ul className="list pl0">
        {R.map(
          review => <BookDetailReview key={review.id} review={review} />,
          reviews,
        )}
      </ul>
    </div>
  );
};

export default BookDetailReviews;
