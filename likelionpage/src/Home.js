import React from 'react';
import img from './images/HOME_image.JPG'
import './Home.css';

const Home = () => {
    return (
        <div id="HomeDiv">
            <h2>LIKE LION UNIV.x K.I.T UNIV.</h2>
            <img src={img} alt="homeImg" />
        </div>
    );
};

export default Home;