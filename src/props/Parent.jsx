import React from 'react'
import ChildA from './ChildA';

const Parent = () => {
    let name="swe";
    let pass=22;
  return (
    <>
    <h1>Parent component</h1>
    <h2>username: {name}</h2>
    <h2>password: {pass}</h2>
    <hr></hr>
    <ChildA name={name} pass={pass}></ChildA>
    </>
  )
}
export default Parent