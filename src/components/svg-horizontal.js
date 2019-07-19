import React from 'react';
import '../assets/css/bootstrap.min.css'

const line=(props)=>{
    return(
        <svg width={props.width} height="1vh" className={props.class}>
          <line x1="0" y1="70%" x2="100%" y2="70%"></line>
        </svg>
    );
    
}
export default line