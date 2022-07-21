import React from 'react';
import img from './images/LIKELION_image.png';
import './Header.css';

const Header = () => {
    return (
        <div>
            <img src={img} alt="likelion" />
        </div>
    );
};

export default Header;