import React, { useState } from 'react'
const Bmi= () => {
    const [weight,setWeight]=useState();
    const [height,setHeight]=useState();
    const [bmi,setBmi]=useState(null);
    const [bmistatus,setBmistatus]=useState("")
    const [error,setError]=useState("")
  function CalculateBmi(){
       if(weight && height){
              let heightInMeters=height/100;
              let bmiValue=weight/(heightInMeters* heightInMeters)
             // console.log(bmiValue)
             setBmi(bmiValue.toFixed(2))
             if(bmiValue<18.5){
                setBmistatus("Under weight")
             }
             else if(bmiValue >=18.5 && bmiValue<=24.9){
                setBmistatus("Normal weight")
             }
             else if(bmiValue >=25 && bmiValue<=29.9){
                setBmistatus("Over weight")
             }
             else{
                setBmistatus("Obese")
             }
             setWeight("")
             setHeight("")
             setError("")
       }
       else{
        setWeight("")
        setHeight("")
        setBmi(null)
        setBmistatus("")
        setError("Pls enter valid weight and height")
       }
  }
  return (
    <>
    <div className="container">
        <h1 className='text-success my-4'>BMI CALCULATOR</h1>
        <div className="form-group my-2">
    <label for="exampleInputEmail1">WEIGHT :</label>
    <input type="text" class="form-control"  placeholder='Weight in KG' onChange={(e)=>{setWeight(e.target.value)}} value={weight}/>
    
  </div>
  <div className="form-group my-2">
    <label for="exampleInputPassword1">HEIGHT :</label>
    <input type="text" class="form-control"  placeholder='Height in CM' onChange={(e)=>{setHeight(e.target.value)}} value={height}/>
  </div>
   <p className='text-danger'>{error}</p>
  <button type="submit" class="btn btn-primary mt-3" onClick={CalculateBmi}>Bmi Calculator</button>
  {bmi !=null && <div className="result">
    <h2>Your BMI value :{bmi}</h2>
    <h2>Your BMI status :{bmistatus}</h2>
  </div> }
    </div>
    </>
  )
}

export default Bmi