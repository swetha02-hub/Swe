import { type } from '@testing-library/user-event/dist/type'
import React, { useReducer } from 'react'

const Hook4 = () => {
    let initialValue={count:0,username:"",useraddress:""}
    function reducer(state,action){
        const {type,payload}=action
     switch(type){
         case "increment":{
             return {count:state.count+1}
         }
         case "decrement":{
            return {count:state.count-1}
         }
         case "reset":{
            return {count:payload}
         }
         case "name":{
            return {...state,username:payload}
         }
         case "address":{
            return {...state,useraddress:payload}
         }

        default:return state;
     }   
    }
 const [state,dispatch]=  useReducer(reducer,initialValue);
 console.log(state)
  return (
    <>
    <h1>COUNTER :{state.count}</h1>
    <button onClick={()=>{dispatch({type:"increment"})}}>Inc</button>
    <button onClick={()=>{dispatch({type:"decrement"})}}>Dec</button>
    <button onClick={()=>{dispatch({type:"reset",payload:0})}}>Reset</button>
    <hr />

    <input type="text" placeholder='UserName' onChange={(e)=>{dispatch({type:"name",payload:e.target.value})}} />
    <h1>Username :{state.username}</h1>
    <input type="text" placeholder='Useraddress'onChange={(e)=>{dispatch({type:"address",payload:e.target.value})}} />
    <h1>Useraddress :{state.useraddress}</h1>
    </>
  )
}

export default Hook4