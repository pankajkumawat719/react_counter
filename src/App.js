import "./App.css";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  function decrementHandler() {
    setCount(count - 1);
  }
  function incrementHandler() {
    setCount(count + 1);
  }

  function resetHandler() {
    setCount(0);
  }
  return (
    <div className="w-screen h-screen flex  justify-center items-center flex-col  bg-[#344151] gap-10">
      <div className="text-6xl text-[#0398d4]">Increment && Decrement</div>
      <div className="flex h-[50px] text-[#344151] text-[25px] gap-10 items-center justify-center py-3 rounded-sm w-[260px] bg-white">
        <button onClick={decrementHandler}>-</button>
        <div>{count}</div>
        <button onClick={incrementHandler}>+</button>
      </div>
      <button className="" onClick={resetHandler}>
        Reset
      </button>
    </div>
  );
}

export default App;
