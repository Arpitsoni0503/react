import { useState , useCallback, useEffect ,useRef} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [length, setlength] = useState(8)
  const [numberallowed,setnumberallowed]=useState(false)

  const [charallowed,setcharallowed]=useState(false)
  const [password,setpassword]=useState("")
const passwrdref=useRef(null)
  // password generator method(simple)
  //we use callback hook bcz it cache(memory) a function between re-renders
  //useCallback(fn,dependencies)
  // fn: The function value that you want to cache. It can take any arguments and return any values.
  // dependencies: The list of all reactive values referenced inside of the fn code. Reactive values include props, state, and all the variables and functions declared directly inside your component body. 
  const fn=()=>{
    let pass=""
    let str="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    if (numberallowed) {
      str+="0123456789"
    }
    if (charallowed) {
      str+="!@#$%^&"
    }
    for (let i = 1; i< length; i++) {
      
      let char=Math.floor(Math.random()*str.length +1)

      // ab char mein values aa chuki hai random toh insert krdo pass mein
      pass+=str.charAt(char)
    }
    setpassword(pass)
  }
  // useeffect mein first one ksiko re-render krwa rhe ho aur second mein ki dependincis kp bar bar ched rhe ho
const copypasswrodtoclicker=useCallback(()=>{
  navigator.clipboard.writeText(password)
},[password])
  useEffect(()=>{
    generatePassword()
  },[length,numberallowed,charallowed,setpassword])
  const generatePassword = useCallback(fn,[length,numberallowed,charallowed,setpassword])
  

  return (
    <>
    
     <div className='w-full max-w-md mx-auto shadow-md text-center rounded-lg px-4 py-2  my-10 bg-gray-400'>
      <h1 className='text-black text-lg py-2'>Password Generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input type="text" 
        value={password} 
        className='outline-none w-full py-2 '
        placeholder='password' 
        readOnly
        ref={passwrdref}
        />
        <button onClick={copypasswrodtoclicker} className='bg-blue-700 px-3 text-white'>copy</button>
      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input 
          type="range"
           min={6}
           max={20} 
           value={length} 
           className='cursor-pointer'
           onChange={(e)=>{
            setlength(e.target.value)
           }}
           />
          <label className='text-lg'>Length:{length}</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input 
          type='checkbox'
          defaultChecked={numberallowed}
          id='numberinput'
          onChange={()=>{
            setnumberallowed((prev)=>!prev);
          }}
           
           />
           <label htmlFor="numberinput" className='text-xl'>Numbers</label>
       
        </div>
        <div className='flex items-center gap-x-1'>
          <input 
          type='checkbox'
          defaultChecked={charallowed}
          id='charallowed'
          onChange={()=>{
            setcharallowed((prev)=>!prev);//callback fire ho rh hai ye setcharallowed ke andar
          }}
           
           />
           <label htmlFor="charallowed" className='text-xl'>Characters</label>
       
        </div>
      </div>
     </div>

    </>
  )
}

export default App
