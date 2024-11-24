import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color,setcolor]=useState("black")

  return (
    <>
    <div className='w-full h-screen duration-150' style={{backgroundColor: color}}>
{/* here color is bydefault black beacuse of the usestae normal inital value is black */}
  <div className='fixed flex flex-wrap justify-center  bottom-10 inset-x-0 px-2 '>
    <div className='fixed flex flex-wrap justify-center text-white   bg-slate-500 gap-20  px-4 py-3 bottom-12 rounded-2xl hover:rounded-3xl duration-200'>
      {/* onclick is unique function because it prefers a callback function rather than directly assigning elements */}
    <button onClick={()=>{setcolor("Red")}} className='outline-none px-5 py-2 bg-red-600 rounded-md hover:rounded-3xl hover:text-white duration-500' style={{backgroundColor:"Red"}}>red</button>
    <button onClick={()=>{setcolor("Blue")}} className='outline-none px-5 py-2 bg-red-600 rounded-md hover:rounded-3xl hover:text-white duration-500' style={{backgroundColor:"BLue"}}>Blue</button>
    <button onClick={()=>{setcolor("Green")}} className='outline-none px-5 py-2 bg-red-600 rounded-md hover:rounded-3xl hover:text-white duration-500' style={{backgroundColor:"Green"}}>Green</button>
    <button onClick={()=>{setcolor("Pink")}} className='outline-none px-5 py-2 bg-red-600 rounded-md hover:rounded-3xl hover:text-white duration-500' style={{backgroundColor:"Pink"}}>Pink</button>
    <button onClick={()=>{setcolor("Orange")}} className='outline-none px-5 py-2 bg-red-600 rounded-md hover:rounded-3xl hover:text-white duration-500' style={{backgroundColor:"Orange"}}>Orange</button>

    </div>
  </div>
    </div>


    </>
  )
}

export default App
