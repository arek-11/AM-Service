import React from 'react';
import '../scss/About.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAppleAlt, faUsers, faTools } from '@fortawesome/free-solid-svg-icons';

export const About = () => {
  return (
    <section className="about-section">
      <h1 className=' mt-[12%]'>О нас</h1>
      <div className="icon-grid">
        <div className="icon-card">
          <FontAwesomeIcon icon={faAppleAlt} size="3x" className="icon" />
          <h2>Наши Продукты</h2>
          <p>Продажа и ремонт техники Apple. Мы предлагаем широкий выбор аксессуаров и обновлений для вашей техники.</p>
        </div>
        <div className="icon-card">
          <FontAwesomeIcon icon={faUsers} size="3x" className="icon" />
          <h2>Наша Команда</h2>
          <p>Команда профессионалов с большим опытом работы, которая готова помочь вам с любой проблемой.</p>
        </div>
        <div className="icon-card">
          <FontAwesomeIcon icon={faTools} size="3x" className="icon" />
          <h2>Наши Услуги</h2>
          <p>Мы предоставляем услуги по ремонту, обслуживанию и выкупу техники Apple с гарантией качества.</p>
        </div>
      </div>
    </section>
  );
};
