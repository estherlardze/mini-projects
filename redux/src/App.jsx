import { useSelector, useDispatch } from "react-redux"
import { increment, decrement, reset, addByAmount } from "./store/index"
import { useState } from "react"

function App() {
   const [addAmount, setAddAmount] = useState(0)
   const counter = useSelector((state) => state.counter)
   const dispatch = useDispatch()

   const checkForNum = Number(addAmount) || 0

  const resetAll = () => {
    setAddAmount(0)
    dispatch(reset())
  }

  return (
    <>
      <h1>Counter</h1>
      <h2>{counter}</h2>

      <div style={{display:"flex", gap:"20px"}}>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
      </div>

      <input 
        type="text" 
        value={addAmount}
        onChange={(e) => setAddAmount(e.target.value)}
        style={{outline:"none", padding:"5px 0", margin:"20px 0", fontSize:"20px", width:"50px"}}
      /> 

     <div  style={{display:"flex", gap:"20px"}}>
      <button onClick={resetAll}>Reset</button>
      <button onClick={() => dispatch(addByAmount(checkForNum))}>Add by Amount</button>
     </div>
      
    </>
  )
}

export default App
