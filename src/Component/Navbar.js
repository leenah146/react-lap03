import React from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <nav className='navbar navbar-expand-lg bg-info navbar-info fixed-top'>
      <div className='container-fluid'>
        <Link className='navbar-brand' to='/'>
         MyBlog
        </Link>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarNavAltMarkup'
          aria-controls='navbarNavAltMarkup'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarNavAltMarkup'>
          <div className='navbar-nav'>
            <Link className='nav-link' to='/'>
              Home
            </Link>        
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;