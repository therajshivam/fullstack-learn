import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const addPizza = () => {
    if (count < 50) {
      // setCount(count + 1);
      setCount(prevCount => prevCount + 1)
      setCount(prevCount => prevCount + 1)
      setCount(prevCount => prevCount + 1)
      setCount(prevCount => prevCount + 1)
    }
  };
  const removePizza = () => {
    if (count > 0) {
      // setCount(count - 1);
      setCount(prevCount => prevCount - 1)
      setCount(prevCount => prevCount - 1)
      setCount(prevCount => prevCount - 1)
      setCount(prevCount => prevCount - 1)
    }
  };

  return (
    <div className="min-h-screen w-full bg-gray-900 text-white">
      <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl mb-6 text-center p-6">
        Pizza Ordering Counter
      </h1>

      <div className="flex justify-center items-center flex-col ">
        <div className="bg-gray-800 border border-gray-700 rounded-2xl p-6 text-center shadow-xl w-full max-w-sm mb-6">
          <h2 className="text-2xl font-bold tracking-wide">
            🍕 Pizza Count :{" "}
            <span className="text-amber-400 font-black text-3xl ml-1">
              {count}
            </span>
          </h2>
        </div>

        <div className="flex gap-4 w-full max-w-sm">
          <button
            onClick={addPizza}
            className="flex-1 bg-amber-500 hover:bg-amber-600 text-gray-900 font-bold py-3 px-6 rounded-xl transition-all shadow-md active:scale-95 text-center"
          >
            Add Pizza 
          </button>
          <button
            onClick={removePizza}
            className="flex-1 bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 px-6 rounded-xl transition-all shadow-md active:scale-95 text-center border border-gray-600"
          >
            Remove Pizza
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
