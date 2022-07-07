import React from 'react';
import imgM from './images/Male_image.png';
import imgF from './images/Female_image.png';
import { getPerson } from './peopleData';
//import { getPeople } from './peopleData';
import { useParams,useSearchParams,useLocation } from 'react-router-dom';
import './People.css';

const People = () => {
    //const peopleList = getPeople();
    //console.log(peopleList);

    const params = useParams();
    //console.log(params);

    const personInfo = getPerson(parseInt(params.departId));
    //console.log(personInfo);

    const location = useLocation();
    console.log(location + " location");

    const [searchParams,setSearchParams] = useSearchParams();
    const detail = (searchParams.get("detail"));

    const detailPerson = ()=>{
        setSearchParams({detail: detail==="true"?false:true});
        
    }
    
    const personList = personInfo.map((person)=>{
        return(
        <>
            <article id="infoArticle">
                <img className="imgPerson" src={(person.photo==="imgM"?imgM:imgF)} alt="peopleImg" />
                <section id="personDataSection">
                    <p>{person.name}</p>
                    <p>{person.department}</p>
                </section>
                <section id="buttonSection">
                    <button type="button" onClick={detailPerson}>자세히</button>
                </section>
            </article>
            <article id="detailArticle">
                {detail === "true" ? <p>MBTI : {person.MBTI}</p>: " "}
                {detail === "true" ? <p>INTRODUCE : {person.detail}</p>: " "}
            </article>
        </>
        );
    });
    console.log(personList);
    return (
        <div id="peopleDiv">
            {personList}
        </div>
    );
};

export default People;