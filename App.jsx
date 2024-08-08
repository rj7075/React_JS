import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter,setCounter]=useState(12)//it is used to set and update the variable value you can also provide intial value to variable  
  //let counter=10;
  // you can't declare it as constant because it is changes during time so declare it as let
  const Addvalue=() =>{
     if(counter>=20){
       counter=0;
     }
      setCounter(counter+1)
  }
  const reduceValue =() => {
    if(counter<=0){
      counter=1;
    }
    setCounter(counter-1);

  }
  return (
    <>
     <h1>Hi I am a full stack developer</h1>
     <h2>counter Vlaue:{counter}</h2>

     <button onClick={Addvalue}>Add Value</button>
     <p>{counter}</p>
     <br />
     <button onClick={reduceValue}>Reduce Value</button>
     <h3>{counter}</h3>
    </>
  )
}

export default App
