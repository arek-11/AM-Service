import React from 'react';
import '../scss/Testimonials.scss';
import { motion } from 'framer-motion';

export const Testimonials = () => {
    return (
        <motion.section className="testimonials"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
        >
            <h2>Отзывы клиентов</h2>
            <div className="testimonials-container">
                <blockquote>
                    <p>Отличный сервис! Быстро и качественно починили мой iPhone.</p>
                    <cite>– Ирина</cite>
                </blockquote>
                <blockquote>
                    <p>Очень доволен покупкой MacBook. Как новый!</p>
                    <cite>– Алексей</cite>
                </blockquote>
            </div>
        </motion.section>
    );
};
