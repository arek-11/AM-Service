import React from "react";
import { NavLink as Link, useNavigate } from "react-router-dom";
import '../scss/Header.scss';
import { useState } from "react";

export function Header({ navbar }) {
    const navigate = useNavigate();
    const [showNavBar, setShowNavBar] = useState(false);

    return (
        <header className='Header'>
            <div className="LeftSide">
                <div
                    id="menu-bar"
                    className="fa-solid fa-bars"
                    onClick={() => setShowNavBar(!showNavBar)}
                ></div>
                <div className='NewLogo hidden' onClick={() => navigate('/')}>
                    <img src='/images/logo.png' alt='logo' /> {/* Обновите путь к новому логотипу */}
                </div>
                <div
                    className='Logo'
                    onClick={() => navigate('/')}
                >
                    <img src='/images/1.png' alt='logo' />
                </div>
            </div>

            <nav className={showNavBar ? 'active' : ''}>
                {navbar.map((el) => (
                    <Link
                        key={el.id}
                        to={el.route}
                        onClick={() => setShowNavBar(false)}
                    >
                        {el.title}
                    </Link>
                ))}
            </nav>

            <div className="RightSide">
                <div className="icons">
                    <i className='fa-solid fa-phone'></i>
                    <a className='phonenumber' href='tel:+7-967-979-43-50'>
                        <span className="call-me">Позвони нам:</span> +7-967-979-43-50
                    </a>
                </div>
                <div className="content">
                    <span className="sity">СПБ</span>
                    <p>Санкт-Петербург</p>
                    <p>Без выходных с 10:00 до 22:00</p>
                </div>
            </div>
        </header>
    );
}
