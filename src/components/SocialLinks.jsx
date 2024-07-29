import React from 'react';
import '../scss/SocialLinks.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faTelegram, faInstagram } from '@fortawesome/free-brands-svg-icons';

export function SocialLinks() {
  return (
    <div className="social-links">
      <h2>Связь с  нами</h2>
      <div className="social-icons">
        <a href="https://wa.me/+79679794350" target="_blank" rel="noopener noreferrer" className="whatsapp">
          <FontAwesomeIcon icon={faWhatsapp} /> {/* Используйте соответствующий иконка для WhatsApp */}
        </a>
        <a href="https://t.me/am_servise" target="_blank" rel="noopener noreferrer" className="telegram">
          <FontAwesomeIcon icon={faTelegram} />
        </a>
        <a href="https://instagram.com/am_servise" target="_blank" rel="noopener noreferrer" className="instagram">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
      </div>
    </div>
  );
}
