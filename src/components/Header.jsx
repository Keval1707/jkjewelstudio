import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import Button from "./Button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo-link">
          <img className="logo" src="/logo.svg" alt="Jkjewelstudio Logo" />
          <span className="sr-only">Jkjewelstudio</span>
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="menu-toggle"
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          <span className={`hamburger ${isMenuOpen ? "open" : ""}`}></span>
        </button>

        {/* Navigation */}
        <nav className={`nav ${isMenuOpen ? "open" : ""}`}>
          <ul className="nav-list">
            <li className="nav-item">
              <Link to="/" className="nav-link" onClick={toggleMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link" onClick={toggleMenu}>
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/gallery" className="nav-link" onClick={toggleMenu}>
                Gallery
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link" onClick={toggleMenu}>
                Contact
              </Link>
            </li>

            {/* Conditionally show Log In / Log Out */}
            {/* {!isAuthenticated ? (
              <li className="nav-item">
                <button
                  onClick={() =>
                    loginWithRedirect({
                      authorizationParams: {
                        redirect_uri: `${window.location.origin}/profile`,
                        audience: import.meta.env.VITE_AUTH0_AUDIENCE,
                        scope: "openid profile email read:current_user",
                        // prompt: "consent",
                      },
                    })
                  }
                  className="login-button"
                >
                  Log In
                </button>
              </li>
            ) : (
              <></>
            )}
            {isAuthenticated && (
              <li className="nav-item nav-profile">
                <Link to="/profile" className="nav-link" onClick={toggleMenu}>
                  <img
                    src={user?.picture}
                    alt={user?.name}
                    className="profile-picture"
                  />
                </Link>
              </li>
            )} */}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
