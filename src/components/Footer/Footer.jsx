import React from "react";
import "./Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <a href="#home">
              Anime<span>Portfolio</span>
              <span className="jp-text"> アニメ</span>
            </a>
          </div>

          <div className="footer-social">
            <a href="#" aria-label="Twitter">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" aria-label="Instagram">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" aria-label="GitHub">
              <i className="fab fa-github"></i>
            </a>
            <a href="#" aria-label="LinkedIn">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Anime Portfolio. All rights reserved.</p>
          <p>
            Made with <span className="heart">❤️</span> and lots of anime vibes
            ✨
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
