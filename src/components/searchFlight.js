import React from 'react'
import "../styles/searchFlight.css";
import {MdFlight} from "react-icons/md";
import{AiFillCar} from "react-icons/ai";
import {FaHotel}  from "react-icons/fa";
import {BsFlagFill} from "react-icons/bs"
import {PiCurrencyInrBold} from "react-icons/pi"
import{ AiOutlineArrowRight} from "react-icons/ai"
import { Link } from 'react-router-dom';


const SearchFlight = () => {
  return (
    <div className='search-fligth'>
         <div className='header-search'>
         <div><img className ="logo" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwKAY2zFRIZJRFKfIUdaQ6kNGoypPW0strGQ&usqp=CAU' alt='img'/></div>
          <div><button className='btn-country'>English(uk) <BsFlagFill/> india < PiCurrencyInrBold/> </button></div>   
         </div>
         <div className='header-btn'>
               <div><button className='btn-flight'> <MdFlight/>Flights</button></div>
               <div><button className='btn-flight'> <AiFillCar/>Car</button></div>
               <div><button className='btn-flight'> <FaHotel/>Hotel</button></div> 
         </div>

         <div className='search-inp'>
            <div><h1>Flight Tickets to Kuala Lumpur</h1></div>
            <div className='rd-div'>
                <div><input className='rd' type='radio' name='radio' />Return</div>
                <div><input className='rd' type='radio' name='radio' />Oneway</div> 
                <div><input className='rd' type='radio' name='radio' />multicity</div>
            </div>
           
                <form >
                <div className='frm'>
                    <div>
                        <div><label>From</label></div>
                        <div> <input  className='inp' type='text'  placeholder="country "/></div>
                    </div>

                    <div>
                        <div><label>To</label></div>
                        <div> <input className='inp' type='text'  placeholder="country "/></div>
                    </div>

                    
                    <div>
                        <div><label>Departure</label></div>
                        <div> <input className='inp' type='date'  placeholder="country "/></div>
                    </div>

                    
                    <div>
                        <div><label>Return</label></div>
                        <div> <input className='inp' type='date'  placeholder="country "/></div>
                    </div>
                    <div>
                        <div><label>Cabin class &traveller</label></div>
                        <div className='btn-ec'>travels</div>
                    </div>
                    </div>
                </form>
      
            <div className='radio'>
            <div className='inp-box'>
            <div><span><input type='checkbox'/>Add nearby airports</span></div>
            <div><span><input type='checkbox'/>Add nearby airports</span></div>
            </div>
            <div><Link to={""}></Link></div>
            </div>
            <div><span><input type='checkbox'/>Add nearby airports</span></div>

         </div>

    </div>
  )
}

export default SearchFlight;