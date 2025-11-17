import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter,setCounter]= useState(15)
  //let counter= 15;

  function addValue(){
    //counter= counter + 1;
    console.log("Counter value is:", counter);
    if(counter<20) setCounter(counter + 1);
    else alert("Counter value cannot exceed 20");
  }

  function removeValue(){
    //counter= counter - 1;
    console.log("Counter value is:", counter);
    if(counter>0) setCounter(counter - 1);
    else alert("Counter value cannot be negative");
  }


  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter Value: {counter}</h2>
      <button onClick={addValue}>Add value</button> 
      <br /> <br />
      <button onClick={removeValue}>Decrease value</button>
    </>
  )
}

export default App
