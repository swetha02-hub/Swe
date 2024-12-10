import React from 'react'
// import "./Style.css"


const Child = (props) => {
  return (
    <>
    <div className="container">
<div className='card'>
    <img src={props.img} className='img' />
 <div className="content">
    <h2>{props.myname}</h2>
    <p>{props.myrole}</p>
    </div>
    <div className="icons">
    <span><img src="11.png" className='i'/></span>
    <span><img src="22.png" className='i'/></span>
    <span><img src="33.png" className='i'/></span>
    <span><img src="44.png" className='i'/></span>

    </div>
    </div>
    </div>
    
</>
  )
}

export default Child