import React from 'react';

import Button from './button'
import '../assets/css/bootstrap.min.css'

const form=(props)=>{
    return(
        <form method={props.method} action={props.action} className={props.class}>
           <div className="d-flex flex-column justify-content-around p-4">
               <div className='d-flex flex-column justify-content-start mt-2'>
                 <label for='name' className='align-self-start mx-3'>Name</label>
                 <input id='name' name='name' className='form-control rounded-pill'></input>
               </div>
               <div className='d-flex flex-column mt-2'>
                 <label for='email' className='align-self-start mx-3'>Email</label>
                 <input id='email' name='email' className='form-control rounded-pill'></input>
               </div>
               <div className='d-flex flex-column mt-2'>
                 <label for='password' className='align-self-start mx-3'>Password</label>
                 <input id='password' name='password' className='form-control rounded-pill'></input>
               </div>
               <div className='d-flex flex-column mt-2'>
               <label  className='align-self-start mx-3'>Confirm Password</label>
               <input  className='form-control rounded-pill'></input>
               </div>
               <Button value='Submit' class='mt-3 btn btn-outline dark rounded-pill'/>
           </div>
        </form>
    );
    
}
export default form