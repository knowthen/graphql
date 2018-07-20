import React from 'react';
import * as R from 'ramda';

const Star = ({ full }) =>
  full ? <i className="fas fa-star" /> : <i className="far fa-star" />;

const Stars = count =>
  R.map(s => <Star key={s} full={s <= count} />, [1, 2, 3, 4, 5]);

const Review = ({ count, ...props }) => {
  return <div {...props}>{Stars(count)}</div>;
};

export default Review;
