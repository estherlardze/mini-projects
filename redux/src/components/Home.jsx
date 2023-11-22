import { useSelector, useDispatch } from "react-redux"
import { increment, decrement, reset, addByAmount } from "../store/index"
import { useState } from "react"
import {useAuthState} from 'react-firebase-hooks/auth'
import { auth } from '../config/firebase'

function App() {
   const [addAmount, setAddAmount] = useState(0)
   const counter = useSelector((state) => state.counter)
   const dispatch = useDispatch()
   const [user, loading, error] = useAuthState(auth)


   const checkForNum = Number(addAmount) || 0

  const resetAll = () => {
    setAddAmount(0)
    dispatch(reset())
  }

  return (

    <>
    {loading ? (<div>Loading...</div>) : 

    ( 
    <div>
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
     </div>
    )}   
    </>
  )
}

export default App