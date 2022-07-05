import React from 'react';
import { useParams } from 'react-router-dom';

function people() {
    const {id} = useParams();
    return (
        <>
            <div> {{id} == '1' ?  <div>1</div>
                : {id} == '2' ?<div>2</div>
                : {id} =='3' ?  <div>3</div>
                : {id} == '4' ?  <div>4</div>
                : <></>}
            </div>
        </>
    );
};

export default people;