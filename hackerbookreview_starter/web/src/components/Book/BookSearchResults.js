import React from 'react';
import * as R from 'ramda';
import { truncate } from '../../util';

const BookSearchResult = props => {
  const { imageUrl, id, title, description, authors = [], addBook } = props;
  return (
    <li className="pv2 cf bb b--black-10">
      <div className="fl">
        <img alt="book cover" className="w4" src={imageUrl} />
      </div>
      <div className="fl pl2">
        <h2 className="fw3 mv0 truncate f2">{title}</h2>
        <h4 className="mv1 fw3 f4">{R.join(', ', authors || [])}</h4>
        <div className="mv1 measure-wide lh-copy">
          {truncate(190, description)}
        </div>
        <div className="fl">
          <input
            className="pv2 ph3 button-reset bg-transparent b--black-80 black-80"
            type="button"
            value="Add Book"
            onClick={e => addBook(id)}
          />
        </div>
      </div>
    </li>
  );
};

const BookSearchResults = props => {
  const { results, addBook } = props;
  return (
    <ul className="list pl0">
      {R.map(
        result => (
          <BookSearchResult addBook={addBook} key={result.id} {...result} />
        ),
        results,
      )}
    </ul>
  );
};

export default BookSearchResults;
