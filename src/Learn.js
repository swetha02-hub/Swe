import React from 'react'
import "./Style.css"
import Timg from "/Users/lenovo/Desktop/task1html/react/learnreact/src/123.jpg"
const Learn = () => {
  let name="123";
  let n="abc";
  let islog=true;
  let greet=islog?<p>true</p>:<p>false</p>
  let num=[1,2,3,4,5]
  return (
    <>
    <h2>hi</h2>
    <h2>bye</h2>
  {/* inline css */}
  <h2 style={{backgroundColor:'pink',color:"white"}}>react</h2>
  {/* externl css */}
  <h2 className='style'>java</h2>
{/* pub img */}
<img src="123.jpg" alt='no' id='i'/>
{/* src img */}
<img src={Timg}/>
{/* js expression */}
<h4>hi {name}</h4>
<h4>bye {n}</h4>
{/* conditional rendering */}
{greet}
{/* <ul>
  <li>{num[0]}</li>
  <li>{num[1]}</li>
  <li>{num[2]}</li>
  <li>{num[3]}</li>
  <li>{num[4]}</li>
</ul> */}
<ul>
  {num.map((cv,index)=>{
      // return <li>{cv}</li>

  return <li key={index}>{cv}</li>
 })}
</ul>

    </>
  )
}

export default Learn