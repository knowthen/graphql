import React from 'react';

const BookSearchForm = props => {
  const { handleChange, search, term } = props;
  return (
    <div>
      <form onSubmit={search}>
        <div className="measure cf">
          <input
            className="input-reset ba b--black-20 pa2 mb2 w-80 fl"
            type="text"
            placeholder="Search ..."
            value={term}
            onInput={e => handleChange('term', e.target.value)}
          />
          <input
            type="submit"
            className="w-20 fl pv2 ph3 input-reset b--black-80"
            value="Search"
          />
        </div>
      </form>
    </div>
  );
};

export default BookSearchForm;
