import { useState } from "react";

function UseState() {
    const [count, setCount] = useState(5)

    const increment = ()=>{
        if (count < 10) {
        setCount(prev => prev + 1)
        }
    }
    const decrement = ()=>{
        if (count > 0) {
        setCount(prev=>prev-1)
        }
    }

  return (
    <div className="flex flex-col justify-center items-center gap-2">
      <h1 className="text-2xl font-bold">useState Hook</h1> 
      <h1 className="text-xl">Counter</h1>
      <p className="text-lg font-semibold my-4">Value : {count}</p>

      <div className="flex gap-4">
      <button 
      className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
      onClick={increment}
      >Increment</button> 
      <button 
      className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 transition"
      onClick={decrement}
      >Decrement</button>
      </div>

    </div>
  );
}

export default UseState;
