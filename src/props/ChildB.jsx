import React from 'react'

const ChildB = (props) => {
     
    
    //  console.log=(props)
    //  const{username,password}=props
  return (
    <>
    <h1>child2</h1>
    <h2>username: {props.username}</h2>
    <h2>password: {props.password}</h2>
    </>
  )
}

export default ChildB