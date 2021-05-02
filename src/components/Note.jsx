import React from 'react';
const Note=(props)=>{
    
  return(
    <>
    <div className="note">
        <h1>{props.content}</h1>
        <p>{props.title}</p>

</div>
        
    
  </>  
  );
}
export default Note;