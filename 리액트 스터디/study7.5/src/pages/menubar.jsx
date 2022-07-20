/*eslint*/
import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const Menubar = () => {
    return (
        <div style={{ textAlign: 'center' }}>
            <img src='/img/LIKELION_image.png' />
            <ul style={{
                display: 'flex', border: '2px solid #0B3B0B', borderLeft: '0px', borderRight: '0px',
                justifyContent: 'space-evenly', width: '60%', textDecoration: 'none',
                margin: 'auto', paddingTop: '5px', paddingBottom: '5px'
            }}>
                <li style={{ listStyle: 'none' }}>
                    <NavLink to='/'>HOME</NavLink>
                </li>
                <li style={{ listStyle: 'none' }}>
                    <NavLink to='/about'>ABOUT</NavLink>
                </li>
                <li style={{ listStyle: 'none' }}>
                    <NavLink to='/people'>PEOPLE</NavLink>
                </li>
            </ul>
            <Outlet />
        </div>
    );
};

export default Menubar;