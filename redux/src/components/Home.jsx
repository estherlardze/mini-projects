import React, {useState} from 'react'
import { useDispatch, useSelector} from 'react-redux'
import { increment, decrement, incrementByAmount, reset } from '../features/CounterSlice'



const Home = () => {
  const dispatch = useDispatch()
  const count = useSelector((state) => state.counter.value)
  const [incrementBy, setIncrementBy] = useState(0)
  
  const addNumber = Number(incrementBy) || 0

  const resetAll = () => {
    setIncrementBy(0)
    dispatch(reset())
  }

console.log(count)

  return (
    <div>
      <div className='app'>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
        <button onClick={resetAll}>reset</button>
       
      </div>  <br />  
      <input 
        type="text" 
        value={incrementBy}
        onChange={(e) => setIncrementBy(e.target.value)} 
      /><br /> <br />
       <button onClick={() => dispatch(incrementByAmount(addNumber))}>Increment by Amount</button>
      <p>Count: {count}</p>
    </div>
  )
}

export default Home
