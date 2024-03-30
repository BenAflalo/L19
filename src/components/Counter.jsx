import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import {
  decrement,
  increment,
  incrementAsync,
  incrementByAmount,
} from "../store/counterSlice"

const Counter = () => {
  // const [count, setCount] = useState(0)
  const count = useSelector((state) => state.counter.count)
  const dispatch = useDispatch()

  return (
    <div>
      <p>You click {count}</p>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(incrementByAmount(15))}>
        Increment By 15
      </button>
      <button onClick={() => dispatch(incrementAsync(10))}>
        Increment async by 10
      </button>
    </div>
  )
}

export default Counter
