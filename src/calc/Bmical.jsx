import React, { useState } from 'react'
// import './Style12.css'
const Bmical = () => {
  const[w,setW]= useState("")
  const[h,setH]= useState("")
  const[b,setB]= useState(null)
  const[s,setS]= useState("")
const [e,setError]= useState("");
// const[st,setSt]=useState("")
// console.log(w)
// console.log(h)

function calc(){
if(isNaN(w) || isNaN(h) ){
  setError("ENTER VALID NUMERIC VALUES")
  setW("")
  setH("")
  setB(null)
   return;
}
if(w==='' || h===''){
  setError("PLEASE ENTER VALUE")
  setW("")
  setH("")
setB(null)
return;
}

  if(w && h){
    const hinmeter=h/100;
    const bmivalue=w/(hinmeter*hinmeter);
    console.log(bmivalue)
    setB(bmivalue.toFixed(2))
    if(bmivalue<=18.4){
      setS("UNDER WEIGHT")
    }
    else if(bmivalue>=18.5 && bmivalue<=25){
      setS("NORMAL WEIGHT")
    }
    else if(bmivalue>25 && bmivalue<=29.9){
      setS("OVER WEIGHT")
    }
    else{
      setS("OBESE")
    }
    setW("")
    setH("")
    setError("")
    // setSt("")
      }
  else{
    setW("")
    setH("")
    setS("")
    setB(null)
    // setError("PLEASE ENTER VALUE")
    // setSt("ENTER VALID NUMERIC VALUES")
  }

}
  return (
    <>
    <center>
    <div className="container">
      <h1>BMI CALCULATOR</h1>
      
     {/* <p style={{color:'red'}}>{e}</p> */}

        <div>
              <label htmlFor='i' className='w'>WEIGHT(kg)</label><br></br>
              <input type="text" placeholder='WEIGHT' id='io' onChange={(e)=>{setW(e.target.value)}} value={w}/>

        </div>

        <div>
              <label htmlFor='i' className='w'>HEIGHT(cm)</label><br></br>
              <input type="text" placeholder='HEIGHT' id='io' onChange={(e)=>{setH(e.target.value)}} value={h}/>

        </div>
<div>
  <button onClick={calc}>CALCULATE BMI</button>
</div>
<br />
  <p style={{color:'red'}}>{e}</p>

  
{b!=null && <div className='d'>

  <h3>YOUR BMI IS: {b}</h3>
  <h3> STATUS: {s}</h3>
{/* <img src="i.gif" className='j' /> */}

</div>}
    </div>
    </center>

    </>
  )
}

export default Bmical