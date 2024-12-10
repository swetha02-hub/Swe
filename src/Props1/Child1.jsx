import React from 'react'
import Child2 from './Child2'

const Child1 = () => {
    let emp=[{name:"a",age:20,gender:"female"},{name:"b",age:21,gender:"male"},{name:"c",age:25,gender:"female"}]
  return (
    <>
    <h1>parent</h1>
{
    emp.map((cv,index)=>{
        // console.log(cv)
        const{name,age,gender}=cv;
       return(
         <Child2 myname={name} myage={age} mygender={gender}></Child2>
        )
    })
}
    </>
  )
}

export default Child1