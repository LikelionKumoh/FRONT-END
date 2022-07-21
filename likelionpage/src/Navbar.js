import React from 'react';
import { Link,Outlet } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <div id="NavDiv">
            <div id="borderDiv">
                <ul>
                    <li><Link to='/'>HOME</Link></li>
                    <li><Link to='/about'>ABOUT</Link></li>
                    <li><Link to='/people'>PEOPLE</Link></li>
                </ul>
            </div>
            <Outlet />
        </div>
    );
};

export default Navbar;