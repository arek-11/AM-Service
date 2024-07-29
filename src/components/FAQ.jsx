import React from 'react';
import '../scss/FAQ.scss';

export function FAQ() {
  return (
    <div className="faq">
      <h2>Часто задаваемые вопросы</h2>
      <div className="faq-item">
        <h3>Какой у вас график работы?</h3>
        <p>Мы работаем ежедневно с 10:00 до 22:00.</p>
      </div>
      <div className="faq-item">
        <h3>Как я могу связаться с вами?</h3>
        <p>Вы можете позвонить нам по телефону +7-965-754-23-68.</p>
      </div>
    </div>
  );
}
