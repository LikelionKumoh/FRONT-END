import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const Peoples = () => {
    return (
        <div>
            <header>
                <h1 style={{color:'#08088A', textAlign:'center'}}>KIT LIKELION FRONT-END</h1>
            </header>
            <main>
                <ul style={{display:'flex', flexDirection:'row', textAlign:'center', justifyContent:'space-evenly', width:'70%', margin:'auto'}}>
                    <li style={{listStyle: 'none'}}><NavLink to='/people/1'>컴퓨터공학과</NavLink></li>
                    <li style={{listStyle: 'none'}}><NavLink to='/people/2'>컴퓨터소프트웨어공학과</NavLink></li>
                    <li style={{listStyle: 'none'}}><NavLink to='/people/3'>메디컬IT융합공학과</NavLink></li>
                    <li style={{listStyle: 'none'}}><NavLink to='/people/4'>전자IT융합공학과</NavLink></li>
                </ul>
                <Outlet/>
            </main>
        </div>
    );
};

export default Peoples;