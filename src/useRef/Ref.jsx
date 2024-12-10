import React, { useRef,useState } from 'react'

const Ref = () => {
    const h1=useRef()
    const input =useRef();
    console.log(input.current)

    function c(){
       h1.current.style.backgroundColor="skyblue"
    }

    function f(){
        input.current.style.backgroundColor="aqua"
    }

    function b(){
        input.current.style.backgroundColor="pink"
    }
  return (
    <>
    
    <h1 ref={h1}>hi</h1>
    <button onClick={c}>clickme</button>
    <input type="text" ref={input} onFocus={f} onBlur={b}/>
    
    
    </>
  )
}

export default Ref