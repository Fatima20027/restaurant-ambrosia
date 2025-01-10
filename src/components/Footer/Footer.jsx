import React from "react";
import "./Footer.css"; // Assuming custom styles
import { Link } from "react-router-dom";

function Footer() {
  return (
    <section className="footer">
      <footer className="text-center text-md-start">
        <div className="container p-4">
          <div className="row align-items-start">
            <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
              <svg
                version="1.1"
                id="restaurant"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 128 128"
                className="icon-brand"
              >
                <g id="row1">
                  <path
                    id="icon"
                    className="st0"
                    d="M48.9 51.8c-9 2.5-16.8 8.1-21.9 15.9l1.4.9c4.9-7.4 12.4-12.8 21-15.2l-.5-1.6zm0 0c-9 2.5-16.8 8.1-21.9 15.9l1.4.9c4.9-7.4 12.4-12.8 21-15.2l-.5-1.6zM119.8 93c-.9-25.5-19.5-46.7-44.1-51.9-1.1-5.3-5.9-9.4-11.7-9.4s-10.6 4-11.7 9.4C27.7 46.2 9.1 67.4 8.3 93H0v3.4h128V93h-8.2zM64 35c3.6 0 6.7 2.2 7.9 5.3-2.6-.4-5.2-.6-7.9-.6s-5.3.2-7.9.6c1.2-3 4.3-5.3 7.9-5.3zM11.7 93c1-27.6 24.1-49.7 52.3-49.7s51.3 22.1 52.3 49.7H11.7z"
                  />
                </g>
              </svg>
              <p className="sub-brand mb-0">BRASSERIE & BAR</p>
              <p className="nav-brand mb-0">
              AMB<span style={{ fontFamily: "Quicksand, serif", fontWeight: "400"}}>R</span>OSIA
              </p>
            </div>

            <div className="col-lg-6 col-md-12 d-flex justify-content-between section2">
              <div className="mt-4">
                <p className="address mb-0">A: 500 Terry Francine St.</p>
                <p className="address mb-0">San Francisco, CA 94158</p>
                <p className="address mb-0">T: 123-456-7890</p>
              </div>
              <ul className="list-unstyled text-end">
                <li>
                  <Link to="/" className="text-decoration-none">
                    Youtube
                  </Link>
                </li>
                <li>
                  <Link to="/" className="text-decoration-none">
                    Instagram
                  </Link>
                </li>
                <li>
                  <Link to="/" className="text-decoration-none">
                    Facebook
                  </Link>
                </li>
                <li>
                  <Link to="/" className="text-decoration-none">
                    Linkedin
                  </Link>
                </li>
                
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div
          className="cr text-center p-3"  
        >
          © {new Date().getFullYear()} by Fatima Hailou
        </div>
        {/* Copyright */}
      </footer>
    </section>
  );
}

export default Footer;
