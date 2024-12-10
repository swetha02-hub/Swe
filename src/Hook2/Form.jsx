import React, { useState } from 'react'

const Form = () => {
    const[data,setData]=useState({})
    function hchange(e){
        const name=e.target.name;
        const value=e.target.value;
        setData({...data,[name]:value})

    }

    function hsubmit(e){
        e.preventDefault();
        alert(JSON.stringify(data))

    }
  return (
    <>
    <center>
       <form action="" onSubmit={hsubmit} method='post'>
        <div>
            <label htmlFor="">username</label>
            <input type="text" name='username' onChange={hchange} value={data.name}/>
        </div>

        <div>
            <label htmlFor="">password</label>
            <input type="password" name='password' onChange={hchange} value={data.pass}/>
        </div>
        <div>
            <label htmlFor="">gender</label>
            <select name="gender" id="" onChange={hchange}>
            <option value="a">a</option>
            <option value="b">b</option>
            <option value="dd">dd</option>

            
            </select>
            
                    </div>
          <input type="submit" value="login" />
       </form>
    </center>
    </>
  )
}

export default Form 
