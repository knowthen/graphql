import * as R from 'ramda';

export const truncate = R.curry((count, text) =>
  R.pipe(R.take(count), s => (R.length(text) > count ? s + '...' : s))(
    text || '',
  ),
);
