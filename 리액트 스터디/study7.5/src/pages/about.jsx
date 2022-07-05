import React from 'react';

const About = () => {

    return (
        <div>
            <h1 style={{color:'#08088A', textAlign:'center'}}>ABOUT LIKELION</h1>
            <div style={{display:'flex', flexDirection:'row', backgroundColor:'#FAFAFA', margin:'auto', width:'60%'}}>
                <div style={{flexGrow:'1', marginBottom:'auto', marginTop:'auto'}}>
                    <img src='/img/ABOUT_image.png' style={{width:'67%', height:'80%'}}/>
                </div>
                <p style={{textAlign:'left', flexGrow:'4.5', fontSize:'18px', fontWeight:'bold'}}>
                    멋쟁이사자처럼은 "HACK YOUR LIFE!, <br/>
                    내 아이디어를 내 손으로 실현한다."라는 가치 아래<br/>
                    전국 대학을 대상으로 온라인 기반의 강의와 오프라인 <br/>
                    활동이 함께 이루어지는 웹 코딩 교육 동아리입니다. <br/>
                    또한 현재 42개의 대학이 함께하고 있는 웹 개발 교육 <br/>
                    프로그램입니다. 금오공과대학교 멋쟁이사자처럼은 <br/>
                    2022년 신규 동아리로 더 많은 사람들과 더 높은 꿈을 <br/>
                    위해 도전해 나가고 있습니다.
                </p>
            </div>
        </div>
    );
};

export default About;