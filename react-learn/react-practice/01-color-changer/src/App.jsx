import { useState } from "react";
import "./App.css";

function App() {
  // const [color, setColor] = useState("gray");
  const [activeColor, setActiveColor] = useState("gray")

  return (
    <div className="min-h-screen w-full bg-gray-900 text-white">
      <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl mb-6 text-center p-6">
        Traffic Light Simulator
      </h1>
      <div className="flex flex-col items-center gap-6 p-6">
        {/* <div className="w-48 h-48 border-4 border-black rounded-xl " style={{background: color}} /> */}

        <div className="flex flex-col gap-4 bg-white p-4 rounded-full">
        <div className="h-16 w-16 rounded-full " style={{backgroundColor: activeColor === 'red' ? 'red' : 'gray'}}/>
        
        <div className="h-16 w-16 rounded-full " style={{backgroundColor: activeColor === 'yellow' ? 'yellow' : 'gray'}}/>
        
        <div className="h-16 w-16 rounded-full "style={{backgroundColor: activeColor === 'green' ? 'green' : 'gray'}} />
      </div>

        <div className="flex gap-4 bg-white p-5 rounded-4xl">
          <button 
          onClick={()=> setActiveColor("red")}
          className=" text-white px-4 py-2 rounded font-bold" style={{background: "red"}}>
            Red
          </button>
          <button 
          onClick={()=> setActiveColor("yellow")}
          className=" text-black px-4 py-2 rounded font-bold" style={{background: "yellow"}}>
            Yellow
          </button>
          <button 
          onClick={()=> setActiveColor("green")}
          className=" text-white px-4 py-2 rounded font-bold" style={{background: "green"}}>
            Green
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
