import React, { useState }  from "react";
import Header from "./components/Header";
import CreateArea from "./components/CreateArea";
import Note from "./components/Note";

const App=()=>{
const[addItem,setAddItem]=useState([]); 
const addNote=(note)=>{
 
setAddItem((prevData)=>{
  return[...prevData,note];
})
};
  return(
    <>
    <Header/>
<CreateArea passNote={addNote}/>

{addItem.map((val,index)=>{
  return <Note
  key={index}
  id={index}
  title={val.title}
  content={val.title}
  />
})}
</>
  );
};
export default App;
