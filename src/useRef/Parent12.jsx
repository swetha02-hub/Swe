import React, {createContext, useState } from 'react'
import Child12 from './Child12'
export const mydata=createContext();

const Parent12 = () => {
const[data,setData]=useState({color:"",Number:""})
  return (
    <>
    <center>
    <h1>parent</h1>
    <input type="text" onChange={(e)=>{setData({...data,color:e.target.value})}}/>
    <h1>my fav color is {data.color}</h1>
    
    <input type="number"  onChange={(e)=>{setData({...data,Number:e.target.value})}} />
    <h1>my number is {data.Number}</h1>
    
    <mydata.Provider value={[data.color,data.Number]}>
    <Child12/>

    </mydata.Provider>
    
    
    </center>
    </>
  )
}

export default Parent12