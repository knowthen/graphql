import React from 'react';
import * as R from 'ramda';
import { Link } from 'react-router-dom';
import Review from './Review';

const RecentReview = ({ review }) => {
  const { id, comment, rating, title } = review;
  const { name } = review.user;
  const { id: bookId, imageUrl } = review.book;
  return (
    <div className="cf mb2">
      <Link
        to={`/book/${bookId}#comment-${id}`}
        className="pointer no-underline link black-80"
      >
        <img alt="book cover" className="mw2 fl" src={imageUrl} />
        <div className="w-80 fl ml1">
          <h5 className="mv0 fl fw5 truncate w-100">{title}</h5>
          <div className="mv0 fl truncate w-100 f6 lh-copy">
            <span className="i">{name}:</span> {comment}
          </div>
          <Review count={rating} className="mv0 fl gold f7 w-100" />
        </div>
      </Link>
    </div>
  );
};

const RecentReviewSection = props => {
  const { reviews } = props;
  return (
    <div className="fl w-30 bl b--black-05 pl2">
      <h3 className="f4 fw4 mt1 mb2">Recent Reviews</h3>
      {R.map(
        review => <RecentReview key={review.id} review={review} />,
        reviews,
      )}
    </div>
  );
};

export default RecentReviewSection;
