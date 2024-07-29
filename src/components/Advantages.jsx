import React from 'react';
import '../scss/Advantages.scss';
import { FaCheckCircle, FaUserTie, FaMapMarkerAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

export const Advantages = () => {
    return (
        <motion.section className="advantages"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 60 }}
        >
            <h2>Преимущества</h2>
            <ul className='parent'>
                <li>
                    <FaCheckCircle className="advantage-icon icon" />
                    <h3>Гарантия качества</h3>
                </li>
                <li>
                    <FaUserTie className="advantage-icon icon" />
                    <h3>Профессионализм</h3>
                </li>
                <li className='treeChild'>
                    <FaMapMarkerAlt className="advantage-icon icon" />
                    <h3>Удобство</h3>
                </li>
            </ul>
        </motion.section>
    );
};
