import React from 'react'
import{FaHotel} from "react-icons/fa"
import{FaCar} from "react-icons/fa"
import {BsGlobeCentralSouthAsia} from "react-icons/bs";
import{Link} from "react-router-dom";
import "../styles/popular.css"



const Popular = () => {
  return (
    <div className='popular'>
        <div className='popular-btn'>
            <button className='btn-popular'><FaHotel/>Hotel</button>
            <button className='btn-popular'> <FaCar/>  Rental Car  </button>
            <button className='btn-popular'><BsGlobeCentralSouthAsia/>Explore all locations</button>
        </div>
        <div className='img-div'>
            <img  className='popualr-img' src="https://images.pexels.com/photos/9739345/pexels-photo-9739345.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt='image'/>
        </div>
        <div>
            <h3>Popular places right now</h3>
            <p>Other travelers are loving these destinations too. Search flights, hotels and rental cars and join them on this adventure.</p>
        </div>
        <div className='popular-countries'>
            <div className='popular-div'>
            <div>
                <img className='popolar-img' src='https://images.unsplash.com/photo-1518684079-3c830dcef090?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZHViYWl8ZW58MHx8MHx8fDA%3D&w=1000&q=80' alt='' />
              </div>
              <div>
                <p>Dubai</p>
                <div><Link to="/" ><span>FLights<span><span>Hotels</span></span>Car Rental</span></Link></div>
              </div>
            </div>

            <div className='popular-div'>
            <div>
                <img className='popolar-img' src='https://images.unsplash.com/photo-1565967511849-76a60a516170?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c2luZ2Fwb3JlfGVufDB8fDB8fHww&w=1000&q=80' alt='' />
              </div>
              <div>
                <p>Singapore</p>
                <div><Link Link to="/"  ><span>FLights<span><span>Hotels</span></span>Car Rental</span></Link></div>
              </div>  
            </div>


            <div className='popular-div'>
            <div>
                <img className='popolar-img' src='https://www.shutterstock.com/shutterstock/photos/248799484/display_1500/stock-photo-new-york-city-dec-times-square-is-a-busy-tourist-intersection-of-neon-art-and-commerce-and-is-248799484.jpg' alt='' />
              </div>
              <div>
                <p>new york</p>
                <div><Link Link to="/" ><span>FLights<span><span>Hotels</span></span>Car Rental</span></Link></div>
              </div>
            </div>

            
        </div>
        <div></div>

    </div>
  )
}

export default Popular