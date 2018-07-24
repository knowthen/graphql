import React from 'react';

const className = 'f6 dib ph2 link mid-gray pointer';

const Footer = props => {
  const year = new Date().getFullYear();
  return (
    <footer className="pv4 ph3 ph5-m ph6-l mid-gray">
      <small className="f6 db tc">
        © {year} <b className="ttu">HACKER BOOK REVIEW</b>., All Rights Reserved
      </small>
      <div className="tc mt3">
        <a className={className}>Terms of Use</a>
        <a title="Privacy" className={className}>
          Privacy
        </a>
      </div>
    </footer>
  );
};

export default Footer;
