import React, { useReducer } from 'react'
const R = () => {
    let intitalvalue={count:0,username:"",password:""}
    function reducer(state,action){
        const{type,payload}=action

        switch(type){
case"i":{
    return{count:state.count+1}
}
case"d":{
    return{count:state.count-1}
}
case"r":{
    return{count:payload}
}
case"name":{
    return{...state,username:payload}
}
case"pass":{
    return{...state,password:payload}
}
default:
    return state;
        }
    }
    const[state,dispatch]=useReducer(reducer,intitalvalue);
    // console.log(state)
  return (
    <>
    <h1>counter:{state.count}</h1>
    <button onClick={(e)=>{dispatch({type:"i"})}}>i</button>
    <button onClick={(e)=>{dispatch({type:"d"})}}>d</button>
    <button onClick={(e)=>{dispatch({type:"r",payload:0})}}>r</button>
<hr />
<input type="text" onChange={(e)=>{dispatch({type:"name",payload:e.target.value})}}/>
<h1>username={state.username}</h1>

<input type="text" onChange={(e)=>{dispatch({type:"pass",payload:e.target.value})}}/>
<h1>pasword={state.password}</h1>
    </>
  )
}

export default R