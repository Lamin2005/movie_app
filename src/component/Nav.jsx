import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faBars,
  faTv,
  faVideo,
} from "@fortawesome/free-solid-svg-icons";
import "../style/Nav.css";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef();

  // Detect click outside
  useEffect(() => {
    const handleClickOutside = (event) => {

      const target = event.target;

      const isListItem = target.closest("li");

      if (menuRef.current && !menuRef.current.contains(event.target) || isListItem) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <nav className="navbar">
      <div className="logo">🎬 MovieApp</div>
      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        <FontAwesomeIcon icon={faBars} />
      </div>

      {/* ✅ ref is only here */}
      <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
        <div ref={menuRef} className="navli">
          <li>
            <NavLink to="/" className="nav-link" end>
              <FontAwesomeIcon icon={faHome} className="icon" />
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/movies" className="nav-link">
              <FontAwesomeIcon icon={faVideo} className="icon" />
              Movies
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className="nav-link">
              <FontAwesomeIcon icon={faTv} className="icon" />
              TV Series
            </NavLink>
          </li>
        </div>
      </ul>
    </nav>
  );
};

export default Nav;
