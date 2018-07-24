import React from 'react';
import * as R from 'ramda';
import classNames from 'classnames';

export const SORT_BY = {
  RATING_DESC: 'Rating',
  ID_DESC: 'New',
};
const SORT_OPTIONS = R.keys(SORT_BY);

const SortItem = ({ orderBy, item, handleOrderBy }) => {
  const className = classNames({
    fw5: orderBy === item,
    'underline link pointer dark-blue': orderBy !== item,
  });
  return (
    <span className={className} onClick={() => handleOrderBy(item)}>
      {SORT_BY[item]}
    </span>
  );
};

export default props => {
  const { orderBy, handleOrderBy } = props;
  return (
    <div>
      Sort By:{' '}
      {R.pipe(
        R.map(item => (
          <SortItem
            handleOrderBy={handleOrderBy}
            orderBy={orderBy}
            key={item}
            item={item}
          />
        )),
        R.intersperse(' | '),
      )(SORT_OPTIONS)}
    </div>
  );
};
