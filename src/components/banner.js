import React, { useEffect, useState } from 'react'
import { fetchAirport , fetchCountry, fetchCity } from '../redux/slices/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import "../styles/banner.css";


import moment from 'moment';
import {DatePicker} from "antd";
const {RangePicker} =DatePicker;






const Banner = () => {

       const airportState = useSelector((state)=>state.User.value.airports);
       const countryState = useSelector((state)=>state.User.value.countries);
       const cityState = useSelector((state)=>state.User.value.cities);

       // const CombinedData = useSelector((state)=>state.User.value.combinedData)
       const [data, setData ] = useState([{

       }])

       const [item, setItem] = useState([{
              
       }])

       const [count, setCount] = useState(0);
       const [child , setChild] = useState(0)

       const [open , setOpen] = useState(false);

       const [date, setDate] = useState([])

       const [option , setOption] = useState("");



      

       // console.log(cityState);


       // console.log(CombinedData);
       
       const change = (res)=>{
              // const mapped = CombinedData.map((f)=> { return f})
              // const maps = mapped.map((e)=>{return e})
              // setData(res);
              const totalData = countryState.filter((e)=>e.name && e.name.toLowerCase().includes(res.toLowerCase()))
              //    console.log(totalData)
              
              const Keys =cityState&& cityState.map((e)=>{return Object.keys(e)[1]})
    
          const filterData = airportState.filter((a)=> a.flight_iata && a.flight_iata.toLowerCase().includes(res.toLowerCase()))
          
          const filterData2 =Keys.filter((e)=> e&&e.toLowerCase().includes(res.toLowerCase()))

          const FullData = [...totalData,...filterData,...filterData2]

          setData(FullData)

     
       }


       const changes = (res)=>{
              // const mapped = CombinedData.map((f)=> { return f})
              // const maps = mapped.map((e)=>{return e})
              // setData(res);
              const totalData = countryState.filter((e)=>e.name && e.name.toLowerCase().includes(res.toLowerCase()))
              //    console.log(totalData)
              
              const Keys =cityState&& cityState.map((e)=>{return Object.keys(e)[1]})
    
          const filterData = airportState.filter((a)=> a.flight_iata && a.flight_iata.toLowerCase().includes(res.toLowerCase()))
          
          const filterData2 =Keys.filter((e)=> e&&e.toLowerCase().includes(res.toLowerCase()))

          const FullData = [...totalData,...filterData,...filterData2]

          setItem(FullData)

     
       }


       const hanleclick = ()=>{
              setOpen(!open)
       }

     


     


// const FilterArray = airportState.filter((f)=>f.flight_iata === inval.toUpperCase().includes)

     const dispatch = useDispatch();

       useEffect(()=>{
       dispatch(fetchAirport()) ;
       dispatch(fetchCountry());
       dispatch(fetchCity());
     
       },[])

                            // cityState.map((el)=>{
                            //               const arr =   Object.keys(el);
                             
                            //            const cityarr = (arr[1].split("/")[1]);
                             
                            //             return (cityarr);

                                       
                            //         })


  return (
    <div className='banner'>
        <h1>Millions of cheap flights. One simple search.</h1>
         <div  >
                    <form  className='searchBar'>
                    <div className='search-origin'>

                        <label>from</label>
                        <input className='inp-origin' type='text'  id='' list='data'
                         placeholder='country, city, or aitport'
                         onChange={(m)=>change(m.target.value)}

                         />

                         <datalist id='data'>
                             {
                                 data &&  data.map((e)=>{
                                   
                                          return(
                                                 <div>
                                                        <option>{e.name ? e.name : null}</option>
                                                        <option>{e.flight_iata ? e.flight_iata :null}</option>
                                                        <option>{typeof e == 'string' ? e : null}</option>
                                                 </div>      
                                     )
                               
                                   })
                            }
                         </datalist>


                         
                </div>
                <div className='search-dest'>
                       <label>To</label>
                        <input className='inp-origin' type='text'  id='' list='item'
                         placeholder='country, city, or aitport'
                         onChange={(n)=>changes(n.target.value)   }  
                         />
                         <datalist id='item'>
                            {
                                     item &&  item.map((g)=>{
                                   
                                          return(
                                                 <div>
                                                        <option>{g.name ? g.name : null}</option>
                                                        <option>{g.flight_iata ? g.flight_iata :null}</option>
                                                        <option>{typeof g == 'string' ? g : null}</option>
                                                 </div>      
                                     )
                               
                                   })
                            }
                         </datalist>
                </div>
                <div >
                       
                       <div className='dep-date'>
                                  <RangePicker
                                  onChange={(values)=>{
                                   setDate(values.map((i)=>{
                                          return moment(i).format("DD-MM-YYYY")
                                   }))

                                  }}
                                  />
                    </div>


                         
                </div>

                {/* <div className='dep-date'>
                       <label>Return</label>
                        <input className='inp-origin' type='date'  id=''
                         placeholder='country, city, or aitport'
                         />
                </div> */}
                <div className='search-economy'>
                       <label>Return</label>
                       <div> <div className='btn' onClick={hanleclick} >Adult, economy {count}{option}</div></div>
                </div>

                <div className='search-btn'>
                      <Link to="/search"> <div> <button  className='search-btn' >search </button></div></Link>
                </div>
             </form>
          
         </div>

         /////moda///

         <div className= {`dropdown ${open?"dropdown-items" :"dropdown-none"}`}>

              <div>
                     <div>
                     Cabin class
                     </div>
                     <div >
                            <select  className='select' onChange={(e)=>setOption(e.target.value) }>
                                   <option>economy</option>
                                   <option>premium </option>
                                   <option>Business class</option>
                                   <option>First Class</option>

                            </select>
                     </div>
                     <div>
                     We can only show Economy prices for this search.
                     </div>
                     <p>To see Business and First Class options, please tell us your travel dates or destination.</p>

                     <div className='adult'>
                            <div>
                                   <div>Adults</div>
                                   <div>Aged 16+</div>
                            </div>
                            <div className='adult-btn'>
                                   <div><button className='btn-count'   onClick = {()=>setCount(count-1)}>-</button></div>
                                   <div><p>{count+1}</p></div>
                                   <div><button  className='btn-count'     onClick = {()=>setCount(count+1)}>+</button></div>

                            </div>
                     </div>


                     <div className='child'>
                            <div>
                                   <div>Adults</div>
                                   <div>Aged 0-15</div>
                            </div>
                            <div className='child-btn'>
                                   <div><button className='btn-count'   onClick = {()=>setChild(child-1)}>-</button></div>
                                   <div><p>{child+1}</p></div>
                                   <div><button  className='btn-count'     onClick = {()=>setChild(child+1)}>+</button></div>

                            </div>
                     </div>

                  <div><button className='btn-apply'>Apply</button></div>

              </div>
         </div>


    </div>

  )
}

export default Banner