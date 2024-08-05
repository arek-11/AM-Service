import React, { useState } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { ContactPage } from './pages/ContactPage';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

export function App() {
    const [navbar] = useState([
        { id: 1, title: 'Главная', route: '/' },
        { id: 2, title: 'О нас', route: '/about' },
        { id: 3, title: 'Контакты', route: '/contacts' },
        { id: 4, title: 'Услуги', route: '/services' },
    ]);

    const [products] = useState([
        { id: 1, title: 'iPhone', image: 'images/iphone.jpg' },
        { id: 2, title: 'iPad', image: 'images/iipad.webp' },
        { id: 3, title: 'iMac', image: 'images/imac3.jpg' },
        { id: 4, title: 'MacBook', image: 'images/macbook.jpg' },
        { id: 5, title: 'Airpods', image: 'images/airpods.png' },
        { id: 6, title: 'iWatch', image: 'images/watch.jpg' }
    ]);

    const [advantages] = useState([
        { id: 1, title: 'Дорого', image: 'images/usd.png', desc: 'Обратившись к нам, вы можете быть уверены, что продадите свою технику максимально выгодно. Потому что, мы — профессионалы.' },
        { id: 2, title: 'Честно', image: 'images/handshake.png', desc: 'Мы никогда не обманываем и всегда выполняем обещания. Мы умеем превращать клиентов в друзей.' },
        { id: 3, title: 'Удобно', image: 'images/handle.png', desc: 'Мы находимся рядом с метро. Нас очень легко найти. Мы приедем в удобное для Вас время и место.' },
    ]);

    return (
        <div className='App'>
            <Header navbar={navbar} />
            <main>
                <Routes>
                    <Route path='/' element={<HomePage products={products} advantages={advantages} />} />
                    <Route path='/about' element={<AboutPage />} />
                    <Route path='/services' element={<ServicesPage />} />
                    <Route path='/contacts' element={<ContactPage />} />
                    <Route path='*' element={<Navigate to='/' />} />
                </Routes>
            </main>
            <Footer />
        </div>
    );
}
