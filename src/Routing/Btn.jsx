import React from 'react'
import { useNavigate } from 'react-router-dom'

const Btn = () => {
    const nav=useNavigate()
    function c(){
  nav("/dash")
    }
  return (
    <>
    <center>
    <h1>login
    <button onClick={c}>login</button>
    </h1>
    </center>
    </>
  )
}

export default Btn