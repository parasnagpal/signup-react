import React from 'react';

import Button from './components/button'
import SignUpForm from './components/form'
import VerticalLine from './components/svg_vertical'

import './styles/style.css'

class Combine extends React.Component{

  
  render(){
      return(
          <div className='conatiner-fluid window'>
              <div className='row'> 
                
                <SignUpForm class='col-12 col-md'/>
                <VerticalLine class='col-0 col-md-1'/>
                <div className='col-12 col-md p-4 d-flex flex-column justify-content-center'>
                    <div className='flex-grow-1 d-flex flex-column justify-content-center'>
                    <div id='l1'><b>Already a</b></div>
                    <div id='l2'>Member ?</div>
                    </div>
                    <Button value='Login' class='btn btn-outline-dark mx-4'/>
                </div>
               
               </div> 
          </div>
      );
  }

};

export default Combine