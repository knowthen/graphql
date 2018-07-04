import React from 'react';

export const Button = ({ Elem, label, ...props }) => {
  const {
    className = 'f4 fw4 link dim br1 ba ph3 pv2 dib black-80 tc',
  } = props;
  return (
    <Elem className={className} {...props}>
      {label}
    </Elem>
  );
};

export const LinkButton = ({
  className = 'f5 fw4 link dim br1 ba ph3 pv2 dib black-80 tc pointer',
  children,
  ...props
}) => {
  return <a className={className}>{children}</a>;
};
