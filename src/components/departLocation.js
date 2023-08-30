import React, { useState } from 'react'
import "../styles/departLocation.css";

import { BsGlobeAsiaAustralia } from 'react-icons/bs'; 
import {GiHamburgerMenu} from 'react-icons/gi';
import {AiOutlineSearch} from "react-icons/ai";
import {BsCurrencyRupee} from "react-icons/bs"

let count = 2500;

const DepartLocation = () => {


    // const [prices , setPrices] = useState();
    const handle =(res)=>{
        // const filterprice = departure.map((f)=>f.price>=25500);

        // setPrice(filterprice);



    }
    
    const departure = [
        {
            city :"New Delhi",
            flights :"from 1+stops ",
            price :23500,
        },

        {
            city :"Amrithsar",
            flights :"from 1+stops ",
            price :24500,
        },


        {
            city :"Ahmedabad",
            flights :"from 1+stops ",
            price :25500,
        },


        {
            city :"Mumbai",
            flights :"from 1+stops ",
            price :26500,
        },


        {
            city :"Marmagao",
            flights :"from 1+stops ",
            price :27500,
        },


        {
            city :"jaipur",
            flights :"from 1+stops ",
            price :28500,
        },


        {
            city :"Chennai",
            flights :"from 1+stops ",
            price :29500,
        },

        {
            city :"Hyderabad",
            flights :"from 1+stops ",
            price :30500,
        },

        {
            city :"Bangalore",
            flights :"from 1+stops ",
            price :30600,
        },

        {
            city :"kolkata",
            flights :"from 1+stops ",
            price :24500,
        },

        
        {
            city :"Indore",
            flights :"from 1+stops ",
            price :26500,
        },


           
        {
            city :"Chandigarh",
            flights :"from 1+stops ",
            price :23500,
        },

           
        {
            city :"Bhubaneswar",
            flights :"from 1+stops ",
            price :23500,
        },

        {
            city :"Lucknow",
            flights :"from 1+stops ",
            price :23500,
        },

        {
            city :"udaipur",
            flights :"from 1+stops ",
            price :23500,
        },


        {
            city :"Kochi",
            flights :"from 1+stops ",
            price :23500,
        },

        {
            city :"Mangalore",
            flights :"from 1+stops ",
            price :23500,
        },

    ]
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

        <div className='depart'>
                <div><input className='depart-inp' type='text' /></div>
                <div className='depart-icons'>
                    <div><AiOutlineSearch className='icons'/></div>
                    <div>india-dubai</div>
                    <div>31Aug-7sep</div>
                    <div>2 travellers</div>
                </div>
             </div>

             <div><h3>Select departure location</h3></div>

             <div className='btn-select'>
                <button onClick={handle} className='flt-btn'>Cheapest Flights</button>
                <button  className='flt-btn'>Direct Flights</button>

             </div>

              <div className='selects'>
              {/* <div className='flights-select'>
                <div>dsmhbd</div>
                <div>djhdku <span>dsjdj</span></div>
             </div> */}

             {
                departure && departure.map((e)=>{

                    console.log(e);
                    return(
                        <div className='flights-select'>
                        <h4>{e.city}</h4>
                        <div>{e.flights}</div>
                        <h5><BsCurrencyRupee/>{e.price}</h5>
                     </div>
                    )
                })
             }
              </div>
             

             

    </div>

  )
}

export default DepartLocation