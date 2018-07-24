import React from 'react';
import * as R from 'ramda';

const Error = props => {
  const { errors } = props;
  const errorMessages = R.pipe(R.defaultTo([]), R.join('. '))(errors);
  if (R.length(errorMessages) < 1) {
    return null;
  }
  return (
    <div className="flex items-center justify-center pa4 bg-red mv3">
      <span className="lh-title ml3 white f4">{errorMessages}</span>
    </div>
  );
};

export default Error;
