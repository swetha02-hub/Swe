import React from 'react'
import UseFetch from './UseFetch'
const Myfetch = () => {
    // const[data,setData]=useState([])

    // useEffect(()=>{
    //     fetch("https://dummyjson.com/products")
    //     .then((res)=>res.json())
    //     .then((data)=>setData(data.products))
    // },[])

    let data=UseFetch("https://dummyjson.com/products");

  return (
    <>
    {data.map((item)=>{
        return(
            <h1>{item.title},{item.price}</h1>
        
        )
    })}
    </>
  )
}

export default Myfetch