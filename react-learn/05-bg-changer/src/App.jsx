import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("olive")

  return (
    <div className='w-full h-screen duration-200' 
    style={{backgroundColor: color}}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-2'>
        <div className='flex flex-wrap justify-center gap shadow-xl bg-white px-3 py-2 rounded-xl'>
          <button 
          onClick={()=> setColor("red")}
          className='outline-none px-4 py-1  m-2 rounded-full text-white shadow-lg'
          style={{backgroundColor: "red"}}
          >Red</button>
          <button 
          onClick={()=> setColor("green")}          
          className='outline-none px-4 py-1 m-2 rounded-full text-white shadow-lg'
          style={{backgroundColor: "green"}}
          >Green</button>
          <button 
          onClick={()=> setColor("blue")}          
          className='outline-none px-4 py-1 m-2 rounded-full text-white shadow-lg'
          style={{backgroundColor: "blue"}}
          >Blue</button>
          <button
          onClick={()=> setColor("yellow")}
          className='outline-none px-4 py-1 m-2 rounded-full text-white shadow-lg'
          style={{backgroundColor: "yellow"}}
          >Yellow</button>
          <button 
          onClick={()=> setColor("black")}
          className='outline-none px-4 py-1 m-2 rounded-full text-white shadow-lg'
          style={{backgroundColor: "black"}}
          >Black</button>
        </div>
      </div>

    </div>
  )
}

export default App



// onClick expects a function.
// If the function has no parameters:
// onClick={handleClick} // Correct

// If we want to pass parameters, we wrap it inside an arrow function.(callback function)
// React executes that function only when the button is clicked.
// onClick wants a function, not the function's returned value.

// Wrong
// onClick={setColor("red")} // Executes immediately during render.

// Correct
// onClick={() => setColor("red")} // Executes only on button click.

// Why does olive color show after page refresh?
// Because "olive" is the initial/default state passed to useState().
// On the first render, color = "olive", so the background is olive.