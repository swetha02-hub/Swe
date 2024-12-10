import React, { useState } from 'react'

const Hook1 = () =>{
    // const  state=useState(123);
    const[count,setCount]=useState(0);
    // console.log(count)
    // console.log(setCount)
    function i(){
setCount(count+1)
// setCount(count+1)
// setCount(count+1)
// setCount((prevC)=>prevC+1)
// setCount((prevC)=>prevC+1)

    }
    function d(){
        setCount(count-1)
    }
    function r(){
        setCount(0)
    }
  return (
    <>
    <h1>you cliked {count} times</h1>
    {/* <button onClick={i}>clickme</button>
    <button onClick={d}>clickme</button>
    <button onClick={r}>clickme</button> */}
<hr>
</hr>
<button onClick={()=>{setCount(count+1)}}>clickme</button>
    <button onClick={()=>{setCount(count-1)}}>clickme</button>
    <button onClick={()=>{setCount(0)}}>clickme</button> 

    </>
  )
}

export default Hook1