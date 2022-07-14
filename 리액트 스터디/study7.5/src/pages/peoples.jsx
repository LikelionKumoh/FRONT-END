import { useState } from 'react';
import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { getFrontEndInfo } from '../data/FrontEndInfo';

const Peoples = () => {

    function getDepHandler(e)
    {
        const ListTmp = frontEndInfo.filter((element)=>{if(e.target.id === element.department) return element});
        setNameList(ListTmp);
    }

    const [searchParams, setSearchParams] = useSearchParams();
    const detail = searchParams.get("detail")


    const handleClick = () => {
        setSearchParams({ detail: detail === "true" ? false: true})
    }
    
    let frontEndInfo = getFrontEndInfo();
    const [NameList,setNameList] = useState([]);

    return (
        <div>
            <header>
                <h1 style={{color:'#08088A', textAlign:'center'}}>KIT LIKELION FRONT-END</h1>
            </header>
            <main style={{width:'60%', margin:'auto', padding:'0px'}}>
                <ul style={{display:'flex', justifyContent:'space-between'}}>
                    <li id="컴퓨터공학과" style={{listStyle: 'none'}} onClick={getDepHandler}>컴퓨터공학과</li>
                    <li id="컴퓨터소프트웨어공학과" style={{listStyle: 'none'}} onClick={getDepHandler}>컴퓨터소프트웨어공학과</li>
                    <li id="메디컬IT융합" style={{listStyle: 'none'}} onClick={getDepHandler}>메디컬IT융합공학과</li>
                    <li id="전자IT융합" style={{listStyle: 'none'}} onClick={getDepHandler}>전자IT융합공학과</li>
                </ul>   
                <div>
                    {   NameList.map((props)=>{
                            return (
                            <div style={{display:'flex', flexDirection:'column',margin:'auto',width:'80%'}}>
                                <div style={{display:'flex', border:'2px solid', marginBottom:'1%'}}>
                                    <img src={props.photo}/>
                                    <p style={{marginTop:'auto', marginBottom:'auto', width:'30%'}}>{props.name}<br/>{props.department}</p>
                                    <button id='button' onClick={handleClick} style={{width:'20%', marginTop:'17%', marginLeft:'30%',backgroundColor:'orange', color:'white', border:'none', borderRadius:'5px'}}>자세히보기</button>
                                </div>
                                <div style={{textAlign:'left', border:'2px solid', marginBottom:'1%'}}>
                                    {detail === 'true' ? <p>MBTI: {props.MBTI}</p>: ""}
                                    {detail === 'true' ? <p>INTRODUCE: {props.detail}</p> : ""}
                                </div>
                            </div>
                        )})
                    }
                </div>
                
            </main>
        </div>
    );
};

export default Peoples;