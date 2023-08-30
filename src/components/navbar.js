import React, { useState } from 'react'
import "../styles/navbar.css";
import {BsGlobeAsiaAustralia} from "react-icons/bs";
import {GiHamburgerMenu} from "react-icons/gi"




// import {Form, FormGroup, Col,Row,Label,Input,Button} from 'reactstrap'

const Navbar = () => {

              const [open ,setOpen ]=useState(false)

  const handleclick = ()=>{
    setOpen (!open)
  }
  return (
    <div>
           <div className='navbar'>
            <div><img className ="logo" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwKAY2zFRIZJRFKfIUdaQ6kNGoypPW0strGQ&usqp=CAU' alt='img'/></div>
             <div className='navbar-2'>
             <div><BsGlobeAsiaAustralia/></div>
             <div><img className='img' src='https://th.bing.com/th/id/OIG.lVXjWwlHyIo4QdjnC1YE' alt=''/></div>
             <div><div className='modal-btn' onClick={handleclick} >< GiHamburgerMenu/></div></div>
             </div>
      </div>
      <div className={` modals open ${open? "modal-open" :"modal-none"}`}>
            <div>Fligths</div>
            <div>Cars</div>
            <div>Hotels</div>
            <div> Explore Everywhere</div>
            <div> Help</div>
      </div>
     </div>        
     
  )
}


export default Navbar