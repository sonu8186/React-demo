import { useState } from "react";
// task 2 api fetching
const App=()=>{
  const [name,setname]= useState("sonu singh");
  const handle=()=>{
    setname("Amit kumar")
  }
  return(
   
    <>
    <h1>name :{name}</h1>
    <p>i am web developer</p>
    <button  onClick={handle}  className="btn" >Clcik Me</button>
    </>
  )
}

export default App;