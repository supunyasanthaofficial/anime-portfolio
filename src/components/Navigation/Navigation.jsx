import React from "react";
import "./Navigation.css";

const Navigation = ({ isMenuOpen, setIsMenuOpen }) => {
  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav className={`nav ${isMenuOpen ? "active" : ""}`}>
        <ul>
          {navItems.map((item, index) => (
            <li key={index}>
              <a
                href={item.href}
                onClick={handleNavClick}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Navigation;
