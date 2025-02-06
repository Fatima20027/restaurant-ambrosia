import React from 'react';
import './Navbar.css';
import { useLocation } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';

function Navbar() {
  const location = useLocation();

  return (
    <nav className="navbar navbar-expand-lg bg-white w-100%  fixed-top">
      <div className="container-fluid">
        <Link className="navbar-brand d-flex" to="/">
        A<span style={{ fontFamily: "italic", fontWeight: "400"}}>M</span>BROSIA
        </Link>
        <button
          className="navbar-toggler border-0 shadow-none"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="offcanvas offcanvas-end"
          tabIndex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          style={{ width: '100vw', height: 'auto', position: 'fixed' }}
        >
          <div className="offcanvas-header justify-content-end">
            <button
              type="button"
              className="btn-close shadow-none mt-4 fs-2"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body d-flex flex-column">
            <ul className="navbar-nav justify-content-center flex-grow-1 text-center flex-column text-lg-end fs-20">
              <li className="nav-item">

              <svg
                version="1.1"
                id="restaurant"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 128 128"
                className="icon-brand-nav"
              >
                <g id="row1">
                  <path
                    id="icon"
                    className="st0"
                    d="M48.9 51.8c-9 2.5-16.8 8.1-21.9 15.9l1.4.9c4.9-7.4 12.4-12.8 21-15.2l-.5-1.6zm0 0c-9 2.5-16.8 8.1-21.9 15.9l1.4.9c4.9-7.4 12.4-12.8 21-15.2l-.5-1.6zM119.8 93c-.9-25.5-19.5-46.7-44.1-51.9-1.1-5.3-5.9-9.4-11.7-9.4s-10.6 4-11.7 9.4C27.7 46.2 9.1 67.4 8.3 93H0v3.4h128V93h-8.2zM64 35c3.6 0 6.7 2.2 7.9 5.3-2.6-.4-5.2-.6-7.9-.6s-5.3.2-7.9.6c1.2-3 4.3-5.3 7.9-5.3zM11.7 93c1-27.6 24.1-49.7 52.3-49.7s51.3 22.1 52.3 49.7H11.7z"
                  />
                </g>
              </svg>
                <Link
                  className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
                  to="/"
                >
                  HOME
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${location.pathname === '/menu' ? 'active' : ''}`}
                  to="/menu"
                >
                  MENU
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}
                  to="/about"
                >
                  ABOUT
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`}
                  to="/about/#contact-title"
                >
                  CONTACT
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${location.pathname === '/book-a-table' ? 'active' : ''}`}
                  to="/book-a-table"
                >
                  BOOK A TABLE
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
