import React, { useState } from 'react'
// import "./Mystyle.css"
const Change = () => {
    const[color,setColor]=useState("")
    function fav(Event){
        setColor(Event.target.value)
        // console.log(e)
    }
  return (
    < >
    <div className='Mystyle'style={{backgroundColor:color}}>
    <input type="text" onChange={fav} style={{backgroundColor:color}}  />
    <h1>My fav color is {color}</h1>
    </div>
    </>
  )
}

export default Change