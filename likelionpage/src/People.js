import React from 'react';
import imgM from './images/Male_image.png';
import imgF from './images/Female_image.png';
import { getPerson } from './peopleData';
//import { getPeople } from './peopleData';
import { useParams,useSearchParams } from 'react-router-dom';
import './People.css';

const People = () => {
    //const peopleList = getPeople();
    //console.log(peopleList);

    const params = useParams();
    //console.log(params);

    const personInfo = getPerson(parseInt(params.departId));
    //console.log(personInfo);

    const [searchParams,setSearchParams] = useSearchParams();
    const detail = (searchParams.get("detail"));

    const detailPerson = (e)=>{

        
        
        if(document.getElementsByClassName(e.target.id)[0].style.display === 'block'){
            document.getElementsByClassName(e.target.id)[0].style.display = 'none';
            document.getElementById(e.target.id).className = 'nonClickBtn';
        }else{
        document.getElementsByClassName(e.target.id)[0].style.display = 'block';
        document.getElementById(e.target.id).className = 'selectionBtn';
        }
        

        setSearchParams({detail: detail==="true"?false:true});
    };
    
    const personList = personInfo.map((person)=>{
        return(
        <div key={person.id}>
            <article id="infoArticle">
                <img className="imgPerson" src={(person.photo==="imgM"?imgM:imgF)} alt="peopleImg" />
                <section id="personDataSection">
                    <p>{person.name}</p>
                    <p>{person.department}</p>
                </section>
                <section id="buttonSection">
                    <button type="button" id={`person${person.id}`} onClick={detailPerson}>자세히</button>
                </section>
            </article>
            
            <article className={`person${person.id}`} id="detailArticle" style={{display:"none"}}>
                <p>MBTI : {person.MBTI}</p>
                <p>INTRODUCE : {person.detail}</p>
            </article> 
            
        </div>
        );
    });

    return (
        <div id="peopleDiv">
            {personList}
        </div>
    );
};

export default People;