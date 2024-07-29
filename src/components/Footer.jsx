// src/components/Footer.jsx

import React from 'react';
import { Link } from 'react-router-dom'; // Импортируем Link из react-router-dom
import '../scss/Footer.scss';

export function Footer() {
  return (
    <footer className="footer">
      <ul className="social-icon">
        <li>
          <a href="https://t.me/am_servise" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-telegram icon"></i>
          </a>
        </li>
        <li>
          <a href="https://instagram.com/am_servise" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-instagram icon"></i>
          </a>
        </li>
      </ul>
      <ul className="menu">
        <li className="menu__item">
          <Link className="menu__link" to="/">Home</Link>
        </li>
        <li className="menu__item">
          <Link className="menu__link" to="/about">About</Link>
        </li>
        <li className="menu__item">
          <Link className="menu__link" to="/contacts">Contact</Link>
        </li>
        <li className="menu__item">
          <Link className="menu__link" to="/services">Services</Link>
        </li>
      </ul>
      <p className="footer-text">&copy;2024 AM-Service | All Rights Reserved</p>
    </footer>
  );
}
