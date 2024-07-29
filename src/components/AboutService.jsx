import React from 'react';
import '../scss/AboutService.scss';
import { FaRecycle, FaShoppingCart, FaWrench, FaTruck } from 'react-icons/fa';
import { motion } from 'framer-motion';

export const AboutService = () => {
    return (
        <motion.section className="services"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
        >
            <h2 className=' mt-[5%]'>Наши услуги</h2>
            <div className="services-container">
                <div className="service-item">
                    <FaRecycle className="service-icon" />
                    <h3>Выкуп техники</h3>
                    <p>Обменяйте вашу технику на деньги быстро и удобно.</p>
                </div>
                <div className="service-item">
                    <FaShoppingCart className="service-icon" />
                    <h3>Продажа</h3>
                    <p>Широкий выбор техники по лучшим ценам.</p>
                </div>
                <div className="service-item">
                    <FaWrench className="service-icon" />
                    <h3>Ремонт</h3>
                    <p>Качественный ремонт техники любой сложности.</p>
                </div>
                <div className="service-item">
                    <FaTruck className="service-icon" />
                    <h3>Выездной ремонт</h3>
                    <p>Ремонт техники Apple на дому или в офисе.</p>
                </div>
            </div>
        </motion.section>
    );
};
