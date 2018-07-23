import React from 'react';
import * as R from 'ramda';
import { ReviewInput } from '../Review';
import classNames from 'classnames';

const tv = R.path(['target', 'value']);

const InputSet = ({ label, type, value, onChange = R.identity }) => {
  return (
    <div className="measure-narrow">
      <label className="f5 fw5 db mb2">{label}:</label>
      <input
        className="input-reset ba b--black-20 pa2 mb2 db w-100"
        type={type}
        onChange={onChange}
        value={value}
        autoComplete="off"
      />
    </div>
  );
};

const TextAreaSet = ({ label, type, value, onChange = R.identity }) => {
  return (
    <div className="measure-narrow">
      <label htmlFor="comment" className="f5 fw5 db mb2">
        {label}:
      </label>
      <textarea
        className="db border-box hover-black w-100 measure ba b--black-20 pa2 br2 mb2"
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

const BookReviewForm = props => {
  const {
    book,
    reviewInput = {},
    handleChange,
    handleSubmit,
    inputValid,
  } = props;
  const {
    count,
    hoverCount,
    name,
    email,
    title: commentTitle,
    comment,
  } = reviewInput;
  if (!book) return null;
  return (
    <form onSubmit={handleSubmit} className="mv3 f4 black-80">
      <ReviewInput
        className="mv2 gold f2 w-100"
        count={hoverCount || count}
        onClick={handleChange('count')}
        onMouseOver={handleChange('hoverCount')}
        onMouseOut={() => handleChange('hoverCount', 0)}
      />
      <InputSet
        label="Display Name"
        type="text"
        value={name}
        onChange={e => handleChange('name', tv(e))}
      />
      <InputSet
        label="Email"
        type="text"
        value={email}
        onChange={e => handleChange('email', tv(e))}
      />
      <InputSet
        label="Title"
        type="text"
        value={commentTitle}
        onChange={e => handleChange('title', tv(e))}
      />
      <TextAreaSet
        label="Comments"
        value={comment}
        onChange={e => handleChange('comment', tv(e))}
      />
      <div className="measure-narrow gray">
        <input
          disabled={!inputValid}
          className={classNames(
            'b ph3 pv2 input-reset ba bg-transparent f6 dib',
            {
              'b--black-80': inputValid,
              grow: inputValid,
              pointer: inputValid,
              'b--moon-gray': !inputValid,
            },
          )}
          type="submit"
          value="Save Review"
        />
      </div>
    </form>
  );
};

export default BookReviewForm;
