import React, { useContext } from 'react'
import { mydata } from './Parent12'

const Child12 = () => {
  const input =useContext(mydata);
   console.log(input)
  return (
    <>
    <center>

<h1>child</h1>
<h2>color: {input[0]}</h2>
<h2>number: {input[1]}</h2>

    </center>
      </>
  )
}

export default Child12