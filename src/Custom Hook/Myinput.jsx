// import React, { useState } from 'react'
import useInput from './useInput'

const Myinput = () => {
    // const[input,setInput]=useState("")
    // function c() {
    //     alert("hello"+" "+input)
    //     setInput("")
    // }
    const[firstname,bindfirstname,resetfirstname]=useInput("")
    const[lname,bindlname,resetlname]=useInput("")

function c(){
    alert("hello"+firstname+lname);
    resetfirstname();
    resetlname();
}
  return (
    <>
    {/* <label htmlFor="">NAME</label>
    <input type="text" onChange={(e)=>{setInput(e.target.value)}} value={input}/>

    <button onClick={c}>clickme</button>
     */}

<label htmlFor="firstname">NAME</label>
    <input type="text" {...bindfirstname}/>

    <label htmlFor="lname">inital</label>
    <input type="text" {...bindlname}/>

    <button onClick={c}>clickme</button>
    
    </>
  )
}

export default Myinput