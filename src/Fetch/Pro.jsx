import React,{useEffect, useState}from 'react'
import axios from 'axios'
// import './S.css'
const Pro = () => {
  const[d,setD]=useState([])
  const[input,setInput]=useState("")

  async function fetchd() {
  let fetchapi=await axios.get(`https://dummyjson.com/products/search?q=${input}`)
  let finald=fetchapi.data.products;
  setD(finald)
}
useEffect(()=>{

  if(input){
    fetchd()
  }
},[input])


  return (
    <>
<nav className='nav'>
    <label htmlFor=""><input type="text" onChange={(e)=>{setInput(e.target.value)}}/></label>
    <h1>PRODUCT LIST</h1> 

         <ul className='n'>
           <li><a href="">HOME</a></li>
           <li><a href="">ABOUT</a></li>
           <li><a href="">SERVICES</a></li>
           <li><a href="">CONTACT</a></li>
          </ul>

</nav>
        
{/* <h1>PRODUCT LIST</h1> */}
      
   <div className="container">
    
   
   {d.map((item,index)=>{
    const{title,description,price,rating,thumbnail}=item;
    return(
      <>
      <div className="list">
        <img src={thumbnail}/>
        <h3>{title}</h3>
        <p>{description}</p>
       <span><h4>Price:${price}</h4>
        <h4 className='ii'>Rating:{rating}</h4></span>
      </div> 
      </>
    )
   })}
    
    </div>     
    </>
  )
}

export default Pro