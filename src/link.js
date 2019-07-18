import React from 'react';
import GoogleLogin from 'react-google-login';

import Button from './components/button'
import SignUpForm from './components/form'
import VerticalLine from './components/svg_vertical'


import './styles/style.css'

class Combine extends React.Component{
    constructor(props){
        super(props)
        this.onSignIn=this.onSignIn.bind(this)
    }

   onSignIn(googleUser) {
       console.log('csdc')
        var profile = googleUser.getBasicProfile();
        console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
        console.log('Name: ' + profile.getName());
        console.log('Image URL: ' + profile.getImageUrl());
        console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
      } 
  
  componentDidMount(){
      alert('mounted')
  }    
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
               <GoogleLogin
                 clientId="915008140428-515ntt9gsotv0sd5qphtp3eak6cmka3l.apps.googleusercontent.com"
                 buttonText="Login"
                 onSuccess={this.onSignIn}
                 cookiePolicy={'single_host_origin'}
               />
          </div>
      );
  }

};

export default Combine