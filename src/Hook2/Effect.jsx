import React, { useEffect, useState } from 'react'

const Effect = () => {

const[count,setCount]=useState(0)
const[color,setColor]=useState('skyblue')
    function i(){
    setCount(count+1);
    }
    // function d(){
    //     setCount(count-1)
    // }
    // function r(){
    //     setCount(0)
    // }

    //hook2
    // useEffect(()=>{
    //     console.log("rendering")
    // })
    // useEffect(()=>{
    //     console.log("rendering")
    // },[])
    useEffect(()=>{
        console.log("rendering")
    },[count,color])
  return (
    <>
    <center style={{backgroundColor:color}}>
<h1>counter {count}</h1>
<button onClick={i}>incement</button>
<button onClick={()=>{setCount(count-1)}}>decrement</button>
<button onClick={()=>{setCount(0)}}>reset</button>

<button onClick={()=>{setColor(color==="skyblue"?"pink":"skyblue")}}>toggle</button>

    </center>
    </>
  )
}

export default Effect