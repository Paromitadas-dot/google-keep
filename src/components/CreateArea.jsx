import React, { useState } from 'react';
const CreateArea=(props)=>{
    const[note,setNote]=useState({
title:"",
content:"",
    });
const InputEvent=(event)=>{


const {name, value}=event.target;

  setNote((prevData)=>{
    return{
      ...prevData,
[name]:value,

    };
  });
};
const addEvent=()=>{
props.passNote(note);
setNote({
title:"",
content:"",
})
};


  return(
    <>
 <div>
<form>
<input 
value={note.title}
autoComplete="off"
onChange={InputEvent}
type="text" 
placeholder="Title"
name="title"
/>
<p>
    <textarea 
    value={note.content}

    name="content" 
    placeholder="take a notes..." 
    onChange={InputEvent}
    >

    </textarea>
</p>
<button onClick={addEvent}>+</button>
</form>
</div>
</>
);
};
export default CreateArea;