import React from 'react';
import * as R from 'ramda';

const Star = ({ full, onClick, onMouseOver, num }) =>
  full ? (
    <i
      className="fas fa-star pointer"
      onClick={() => onClick(num)}
      onMouseOver={() => onMouseOver(num)}
    />
  ) : (
    <i
      className="far fa-star pointer"
      onClick={() => onClick(num)}
      onMouseOver={() => onMouseOver(num)}
    />
  );

const Stars = (onClick, onMouseOver, count) =>
  R.map(
    num => (
      <Star
        key={num}
        full={num <= count}
        num={num}
        onClick={onClick}
        onMouseOver={onMouseOver}
      />
    ),
    [1, 2, 3, 4, 5],
  );

const ReviewInput = ({
  count,
  onClick = R.identity,
  onMouseOver = R.identity,
  ...props
}) => {
  return <div {...props}>{Stars(onClick, onMouseOver, count)}</div>;
};

export default ReviewInput;
