import React from 'react'
import "../styles/footer.css";
import {BsFlagFill} from "react-icons/bs";
import {BiRupee} from "react-icons/bi";

const Footer = () => {
  return (
    <div>
        <div className='footer'>
            <div><button className='footer-btn'><BsFlagFill/> india .English. <BiRupee/>INR</button></div>
            <div>
                <div className='help'>
                    <div>Help</div>
                    <div>Privacy Setting</div>
                    <div>Login</div>

                </div>
            </div>
            <div>
                <div className='cookie'>
                    <div>Cookie Policy</div>
                    <div>Privacy Policy</div>
                    <div>Terms of service</div>
                    <div>Company Details</div>

                </div>
            </div>
            <div >
                   <div className='explore'>
                    <div>Explore</div>
                    <div>Company</div>
                    <div>Partners</div>
                    <div>Trips</div>
                    <div>international Sites</div>
                   </div>
             </div>
        </div>
    </div>
  )
}

export default Footer