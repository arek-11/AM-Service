import React from 'react';
import './NotFoundPage.scss'; // Импортируйте стили, если нужно

export function NotFoundPage() {
  return (
    <div className="not-found-page">
      <h1>404</h1>
      <p>Страница не найдена</p>
      <a href="/">Вернуться на главную</a>
    </div>
  );
}
