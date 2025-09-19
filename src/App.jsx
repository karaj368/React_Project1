import { useState } from "react";


function App() {
  const [counter, setCounter] = useState(1);
  const [color, setColor] = useState("greenyellow");

  const addValue = () => {
    setCounter(counter + 1)
  }
  const removeValue = () => {
    setCounter(counter - 1)
  }

  return (
    <>
      <div className="w-full h-screen duration-200" style={{ backgroundColor: color }}>
        <div className="flex flex-col justify-center text-center items-center  h-full gap-3">
          <h1 className="text-2xl font-bold font-sans mb-2">React with Tailwind CSS</h1>
          
          <h2 className="text-2xl font-bold font-sans mb-4">Counter Value: {counter}</h2>

          <div>
            <button className="bg-white shadow px-3 py-2 font-medium capitalize rounded-3xl mx-2" onClick={addValue}> Add Value +</button>
            <button className="bg-white shadow px-3 py-2 font-medium capitalize rounded-3xl mx-2" onClick={removeValue}> Remove Value -</button>
          </div>
          <div>
            <button className="bg-white shadow px-3 py-2 font-medium  rounded-3xl mx-2" onClick={() => setColor("red")}> Background Red</button>
            <button className="bg-white shadow px-3 py-2 font-medium capitalize rounded-3xl mx-2" onClick={() => setColor("greenyellow")}> Bg greenyellow </button>
          </div>
        </div>

      </div>

    </>
  );
}

export default App;
