import React from 'react';
import '../assets/css/bootstrap.min.css'

const line=(props)=>{
    return(
        <svg id="chart" height="40vh" className={props.class}>
          <line x1="50%" y1="20" x2="50%" y2="100%"></line>
        </svg>
    );
    
}
export default line