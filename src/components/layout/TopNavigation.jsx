import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import './TopNavigation.css';

export default function TopNavigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { path: '/', label: 'Dashboard' },
    { path: '/saved', label: 'Saved' },
    { path: '/digest', label: 'Digest' },
    { path: '/settings', label: 'Settings' },
    { path: '/proof', label: 'Proof' }
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="top-navigation">
      <div className="top-navigation__logo">
        <span className="top-navigation__app-name">Job Notification App</span>
      </div>
      
      <div className="top-navigation__mobile-toggle" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      
      <div className={`top-navigation__links ${isMenuOpen ? 'top-navigation__links--open' : ''}`}>
        {navLinks.map((link) => (
          <NavLink
            key={link.path}
            to={link.path}
            className={({ isActive }) => 
              isActive ? 'top-navigation__link--active' : 'top-navigation__link'
            }
            onClick={() => setIsMenuOpen(false)}
          >
            {link.label}
          </NavLink>
        ))}
      </div>
    </nav>
  );
}
