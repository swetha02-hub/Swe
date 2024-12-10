import React from 'react'
import Child from './Child';
const Parent1 = () => {
  const person=[
    {
      name: "Walter White",
      role: "Web Development",
      image: "1.jpg",
    },
    {
      name: "Sarah Jhinson",
      role: "Marketing",
      image: "2.jpg",
    },
    {
      name: "William Anderson",
      role: "Content",
      image: "3.jpg",
    },
    {
      name: "Amanda Jepson",
      role: "UI/UX Designer",
      image: "4.jpg",
    },];
  return (
    <>
    <h1>TEAM MEMBERS</h1>
    {
      person.map((cv,index)=>{
        const{name,role,image}=cv;
        return(
          <Child myname={name}  myrole={role} img={image}></Child>
        )
      })
    }
    </>
  )
}

export default Parent1