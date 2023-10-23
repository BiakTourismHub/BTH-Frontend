import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar is-link" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item" href="/">
          <img src="logo.png" alt="Your Logo" className='image is-96x96' />
        </a>
        <div className="navbar-item has-text-centered">
          <p className="title is-5 has-text-light">Biak Tourism-Hub</p>
        </div>
      </div>
      <div className="navbar-menu">
        <div className="navbar-end">
          <a className="navbar-item" href="/login">
            Login
          </a>
          <a className="navbar-item" href="/register">
            Register
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
