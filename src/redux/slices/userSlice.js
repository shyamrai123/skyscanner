import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { baseUrl } from "../../utils/utils";
import axios from "axios";

const userSlice = createSlice({
    name : "users",
    initialState:{
            value:{ 
        airports:[],
        cities :[],
        countries:[],
        combinedData :[],

            }
    },
    reducers :{},

    ////airports///

    extraReducers:(builder)=>{
       builder.addCase(fetchAirport.fulfilled, (state, action)=>{
          state.value.airports = action.payload;
          state.value.combinedData =[...state.value.combinedData,... action.payload.map((d)=>{
            const aiportData = d.flight_iata;
            return {aiportCode:aiportData} ;
   })]
          state.error = null;
       })

       builder.addCase(fetchAirport.rejected,(state,action)=>{
        state.value.error = action.error;

       })

       ///countries//
       builder.addCase(fetchCountry.fulfilled, (state, action)=>{
        state.value.countries = action.payload;
        state.value.combinedData = [...state.value.combinedData,...action.payload]

        state.error = null;
     })

     builder.addCase(fetchCountry.rejected,(state,action)=>{
      state.value.error = action.error;

     })


     ///cities///
     builder.addCase(fetchCity.fulfilled, (state, action)=>{
        state.value.cities = action.payload;
        state.value.combinedData = [...state.value.combinedData,
        action.payload.map((el)=>{
                      const arr =   Object.keys(el);
         
                   const cityarr = (arr[1].split("/")[1]);
         
                    const arrys = { name: cityarr};

                    return arrys;

                   
                })]
        state.error = null;
     })

     builder.addCase(fetchCity.rejected,(state,action)=>{
      state.value.error = action.error;

     })


    }
})


  export const fetchAirport = createAsyncThunk("fetchAirport", async()=>{
    const{ data} = await axios.get(baseUrl+ "/api/airports");
    return data;
})


export const fetchCountry = createAsyncThunk("fetchCountry",async()=>{
    const {data} = await axios.get(baseUrl +"/api/country");
    return data;
})


export const fetchCity = createAsyncThunk("fetchCities",async()=>{
    const {data} = await axios.get(baseUrl +"/api/city");
    return data;
})

export default userSlice.reducer; 


