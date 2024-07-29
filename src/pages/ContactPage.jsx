import React from 'react';
import '../scss/ContactPage.scss';
import { FAQ } from '../components/FAQ';
import { SocialLinks } from '../components/SocialLinks';

export function ContactPage() {
  return (
    <div className="contact-page">
      <header className="contact-header">
        <h1>Наши Контакты</h1>
      </header>
      <div className="contact-info">
        <div className="contact-item">
          <h2>Время работы</h2>
          <p>Ежедневно с 10:00 до 22:00</p>
        </div>
        <div className="contact-item">
          <h2>Наш телефон</h2>
          <p>+7-967-979-43-50</p>
        </div>
        <div className="contact-item">
          <h2>Адрес</h2>
          <p>Санкт-Петербург</p>
        </div>
      </div>

      <FAQ />
      <SocialLinks />

      <div className="map">
        <iframe
          src="https://yandex.ru/map-widget/v1/?ll=30.304960%2C59.850634&mode=search&oid=65315595874&ol=biz&z=15.19"
          frameBorder="0"
          allowFullScreen
          width="100%"
          height="400"
          style={{ border: 0 }}
        ></iframe>
      </div>
    </div>
  );
}
