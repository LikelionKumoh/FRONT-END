import React from 'react';
import img from './images/ABOUT_image.png'
import './About.css';

const About = () => {
    return (
        <div id="AboutDiv">
            <h2 id="AboutTitle">ABOUT LIKELION</h2>
            <section id="AboutContainer">
                <img id="AboutImg" src={img} alt='AboutImg' />
                <p id="AboutEx">멋쟁이사자처럼은 "HACK YOUR LIFE!,<br /><br /> 
    내 아이디어를 내 손으로 실현한다."라는 가치 아래<br /><br />
    전국 대학을 대상으로 온라인 기반의 강의와 오프라인 <br /><br />
    활동이 함께 이루어지는 웹 코딩 교육 동아리입니다. <br /><br />
    또한 현재 42개의 대학이 함께하고 있는 웹 개발 교육 <br /><br />
    프로그램입니다. 금오공과대학교 멋쟁이사자처럼은 <br /><br />
    2022년 신규 동아리로 더 많은 사람들과 더 높은 꿈을 <br /><br />
    위해 도전해 나가고 있습니다.</p>
            </section>
        </div>
    );
};

export default About;