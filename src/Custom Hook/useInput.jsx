import React, { useState } from 'react'

const useInput = (intialvalue) => {
 const [value,setValue]= useState(intialvalue)
 const bind={
    value:value,
    onChange:e=>{
        setValue(e.target.value)
    }
}
    const reset=()=>{
        setValue(intialvalue)
    }

  return[value,bind,reset]
}

export default useInput