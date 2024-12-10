import React,{useEffect,useState} from 'react'

const UseFetch = (url) => {
  
    const[response,setResponse]=useState([])

    useEffect(()=>{
        fetch(url)
        .then((res)=>res.json())
        .then((data)=>setResponse(data.users))
    },[])
    return response
}

export default UseFetch