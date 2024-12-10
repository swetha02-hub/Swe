import React from 'react'

const Event = () => {
    function display(){
        alert("hi")
    }
    function display1(a,b){
        alert(a+b)
    }
    function change(e){
        // console.log('hi')
        console.log(e.target.value)
    }
  return (
    <>
    <p>hi</p>
    <button onClick={display}>clickme</button>
    <button onClick={()=>{
        display1(10,20)
    }}>clickme</button>

<hr></hr>

<input type="text" onChange={change}/>
    </>
  )
}

export default Event