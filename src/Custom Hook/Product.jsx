import React from 'react'
import UseFetch from './UseFetch'

const Product = () => {
    const dam=UseFetch("https://dummyjson.com/users")
  return (
    <>
      {dam.map((item)=>{
        return(
            <h1>{item.id},{item.age}</h1>
        
        )
    })}
    </>
  )
}

export default Product