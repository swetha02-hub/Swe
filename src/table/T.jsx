import React, { useState } from 'react'
import axios from 'axios'
import './Tt.css'

const T = () => {
    const[data,setData]=useState([])
async function fetchdata() {
    let fetchapi=await axios.get('https://dummyjson.com/users')
     console.log(fetchapi)
     let finaldata=fetchapi.data.users;
     setData(finaldata)
}
fetchdata()
  return (
    <div className='h'>

<table>
    <thead>
        <tr>
        <th>ID</th>
        <th>NAME</th>
        <th>EMAIL</th>
        <th>GENDER</th>
        <th>AGE</th>
        </tr>
    </thead>
    <tbody>
{data.map((user,index)=>{
    return <tr key={index}>
        <td>{user.id}</td>
        <td>{user.firstName}</td>
        <td>{user.email}</td>
        <td>{user.gender}</td>
        <td>{user.age}</td>
    </tr>
})}


    </tbody>
</table>








    </div>
  )
}

export default T