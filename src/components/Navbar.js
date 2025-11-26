import React, { useState, useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = ({ location }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActive = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  return (
    <nav className={`menu ${scrolled ? 'scrolled' : ''}`}>
      <div className="logo">
        <Link to="/">SAMANTAS</Link>
      </div>
      
      <input 
        type="checkbox" 
        id="checkbox1" 
        className="checkbox1"
        checked={isMenuOpen}
        onChange={toggleMenu}
      />
      <label htmlFor="checkbox1">
        <div className="button button1">
          <span className="top"></span>
          <span className="middle"></span>
          <span className="bottom"></span>
        </div>
      </label>
      
      <ul className={`menu-list ${isMenuOpen ? 'active' : ''}`}>
        <li>
          <Link 
            to="/" 
            onClick={() => setIsMenuOpen(false)}
            className={isActive('/')}
          >
            Home
          </Link>
        </li>
        <li>
          <Link 
            to="/collections" 
            onClick={() => setIsMenuOpen(false)}
            className={isActive('/collections')}
          >
            Collections
          </Link>
        </li>
        <li>
          <Link 
            to="/about" 
            onClick={() => setIsMenuOpen(false)}
            className={isActive('/about')}
          >
            About Us
          </Link>
        </li>
        <li>
          <Link 
            to="/models" 
            onClick={() => setIsMenuOpen(false)}
            className={isActive('/models')}
          >
            Our Models
          </Link>
        </li>
        <li>
          <Link 
            to="/contact" 
            onClick={() => setIsMenuOpen(false)}
            className={isActive('/contact')}
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default withRouter(Navbar);
