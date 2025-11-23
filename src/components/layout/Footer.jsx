import { NavLink } from "react-router-dom";

export const Footer = () => {
  return (
    <>
      <footer className="section-footer">
        <div className="container footer-container">

          {/* Brand */}
          <div className="footer-brand">
            <NavLink to="/">
              <p>NETFLIX</p>
            </NavLink>
            <p className="tagline">Unlimited movies, shows & more.</p>
          </div>

          {/* Navigation */}
          <div className="footer-links">
            <ul>
              <li><NavLink to="/">Home</NavLink></li>
              <li><NavLink to="/about">About</NavLink></li>
              <li><NavLink to="/movie">Movies</NavLink></li>
              <li><NavLink to="/contact">Contact</NavLink></li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="footer-social">
            <p>Follow Us</p>
            <div className="icons">
              <a href="#"><i className="fa-brands fa-facebook">Facebook</i></a>
              <a href="#"><i className="fa-brands fa-instagram"></i>Instagram</a>
              <a href="#"><i className="fa-brands fa-twitter"></i>Twitter</a>
              <a href="#"><i className="fa-brands fa-youtube"></i>Youtube</a>
            </div> 
          </div>

        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Netflix Clone — All router_Rights Reserved.</p>
        </div>
      </footer>
    </>
  );
};
