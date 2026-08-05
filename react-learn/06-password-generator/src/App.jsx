import { useState, useCallback } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("") // input field password

  // password generator method
  // we have to call this method many times(numbers, length, chars), for the optimised way : useCallback()
  const passwordGenerator = useCallback(()=>{
    let pass =""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllowed) str += "0123456789"
    if (charAllowed) str += "!@#$%^&*()_+-?=/[]{.}>|;':"

    for(let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random * str.length + 1)
      pass = str.charAt(char)
    }

    setPassword(pass)

  }, [length, numberAllowed, charAllowed, setLength])



  return (
    <>
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-white bg-gray-700'>
      <h1 className='text-center text-white text-2xl m-2'>Password Generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input 
        type="text"
        value={password}
        className='outline-none w-full py-1 px-3 bg-amber-50 text-gray-950'
        placeholder='Password'
        readOnly
        />
        <button
        className='outline-none bg-blue-700 px-3 py-0.5 shrink-0 '
        >Copy</button>
      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input 
          type="range"
          min={6}
          max={50}
          value={length}
          className='cursor-pointer'
          onChange={(e)=>{setLength(e.target.value)}}
          />
          <label>Length: {length}</label>
        </div>
        <div 
        className='flex items-center gap-x-1'>
          <input 
          type="checkbox" 
          defaultChecked={numberAllowed} 
          id='numberInput'
          onChange={()=>{
            setNumberAllowed((prev) => !prev)
          }}
          />
          <label htmlFor="numberInput">Numbers</label>
        </div>
        <div 
        className='flex items-center gap-x-1'>
          <input 
          type="checkbox" 
          defaultChecked={charAllowed} 
          id='charInput'
          onChange={()=>{
            setCharAllowed((prev) => !prev)
          }}
          />
          <label htmlFor="charInput">Characters</label>
        </div>
      </div>
    </div>
    </>
  )
}

export default App