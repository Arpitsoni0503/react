import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'
function App() {
let myObj={
  username:'arpit',
  age:21
}
let newarr=[1,2,3]

  return (
    <>

    <Card username="arpit" btntext="click" />
    <Card username="arpitpathani" btntext="visit" />
   

    </>
  )
}

export default App
