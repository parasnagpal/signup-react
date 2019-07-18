import React from 'react';
import '../assets/css/bootstrap.min.css'

const button=(props)=>{
    return(
        <button className={props.class+'btn btn-outline-dark'}>
            {props.value}
        </button>
    );
    
}
export default button