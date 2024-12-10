import React, { useState } from 'react';
// import './Stylea.css';

const Task = () => {
  const [input, setInput] = useState([]); 
  const [newInput, setNewInput] = useState(''); 
  const [comment, setcomments] = useState([]); 


  function addInput() {
      setInput([...input, newInput]); 
      setNewInput(''); 
  }
  function deleteinput(index){
     console.log(index)
    let updateinput=[...input];
    updateinput.splice(index,1)
    setInput(updateinput)
  }
  
function commenttask(index){
  const tsk=input[index];
 setcomments([...comment,tsk]);

}

  return (
    <div className='container'>
    
      <input type="text" placeholder='ENTER YOUR TASKS' onChange={(e) => setNewInput(e.target.value)} value={newInput}  className='u'/>

      <button onClick={addInput} className='i'>ADD</button>
      <h2 className='h1'>ADDED DATAS</h2>
      
      <h2 className='h'>COMMENTED DATAS</h2>

      <ul className='li'>
        {input.map((task, index) => (
          <li key={index}>{task}<button onClick={deleteinput} className='o'>-</button><button onClick={()=>commenttask(index)} className='oo'>+</button></li>

        ))}
      </ul>

 <ul className='e'>
  {comment.map((comments,index)=>(
<li key={index}>{comments}</li>
    ))
  }
</ul> 

  
    </div>
  

  );
};

export default Task;