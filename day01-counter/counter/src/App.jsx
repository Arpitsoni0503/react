import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter,setcounter]=useState(10)

    
     

//let counter=4
const addValue=()=>{
  // counter=counter+1
 
if ( counter<20) {
  setcounter(counter+1)
}
}
const decvalue=()=>{
  // counter=counter-1
if ( counter>0) {
  setcounter(counter-1)

}}
  return (
    <>
    <h1>Counter Value:{counter}</h1>
    <button onClick={addValue}>add value</button>
    <button onClick={decvalue}>decrease value</button>
    </>
  )
    
  
}

export default App
