import React from 'react'
import ChildB from './ChildB'

const ChildA = (props) => {
    console.log=(props)
     const{name,pass}=props
  return (
    <>
    <h1>child1</h1>
    <h2>username: {name}</h2>
    <h2>password: {pass}</h2>
    <hr></hr>
    <ChildB username={name} password={pass}></ChildB>
    </>
    
  )
}
export default ChildA
