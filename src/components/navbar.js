import React from 'react'
import "../styles/navbar.css";
import { BsGlobeAsiaAustralia } from 'react-icons/bs'; 
import {GiHamburgerMenu} from 'react-icons/gi';
// import {Form, FormGroup, Col,Row,Label,Input,Button} from 'reactstrap'

const Navbar = () => {
  return (
    <div>
           <div className='navbar'>
            <div><img className ="logo" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwKAY2zFRIZJRFKfIUdaQ6kNGoypPW0strGQ&usqp=CAU' alt='img'/></div>
             <div className='navbar-2'>
             <div><BsGlobeAsiaAustralia/></div>
             <div><img className='img' src='https://th.bing.com/th/id/OIG.lVXjWwlHyIo4QdjnC1YE' alt=''/></div>
             <div><button>< GiHamburgerMenu/></button></div>
             </div>
      </div>
     </div>        
     
  )
}


export default Navbar