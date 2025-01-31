import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faUser, faBell, faCog } from '@fortawesome/free-solid-svg-icons';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <h1>Mgcini Bootcamp Roadmap</h1>
      <nav>
        <ul className="main-menu">
          <li><Link to="/">Progress Tracker</Link></li>
          <li><Link to="/projects">My Projects</Link></li>
          <li><Link to="/tasks">Task Planner</Link></li>
        </ul>
        <div className="hamburger" onClick={toggleMenu}>
          <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
        </div>
        {menuOpen && (
          <div className="menu-container" onClick={toggleMenu}>
            <ul className="menu" onClick={(e) => e.stopPropagation()}>
              <li className="close-btn" onClick={toggleMenu}><FontAwesomeIcon icon={faTimes} /></li>
              <li><Link to="/profile"><FontAwesomeIcon icon={faUser} /> Profile</Link></li>
              <li><Link to="/notifications"><FontAwesomeIcon icon={faBell} /> Notifications</Link></li>
              <li><Link to="/settings"><FontAwesomeIcon icon={faCog} /> Account Settings</Link></li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Header;