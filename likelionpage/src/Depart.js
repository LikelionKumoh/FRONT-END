import React from 'react';
import { Outlet,NavLink } from 'react-router-dom';
import './Depart.css';

const People = () => {
    const departmentList = [
        {department : "컴퓨터공학과",id:1},
        {department : "컴퓨터소프트웨어공학과",id:2},
        {department : "메디컬IT융합공학과",id:3},
        {department : "전자IT융합공학과",id:4}
    ];

    return (
        <div>
            <h2>KIT LIKELION FRONT-END</h2>
            <div id="departDiv">
                {departmentList.map((depart)=>
                    <NavLink 
                    to={`/people/${depart.id}`} 
                    key={depart.id}
                    style={({isActive})=>{
                        return{
                            backgroundColor:isActive?"beige":"",
                            border:isActive?"1px solid beige":"",
                            borderRadius:isActive?"30px":""
                        }
                    }}>
                        <a>{depart.department}</a>
                        
                    </NavLink>
                )}
            </div>
            <Outlet />
        </div>
    );
};

export default People;