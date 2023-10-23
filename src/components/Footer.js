import React from 'react';

const Footer = () => {
  return (
    <footer className="footer is-link">
      <div className="content has-text-centered">
        <p>
          Biak Tourism-Hub &copy; {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
