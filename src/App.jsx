import { useState } from 'react'
import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { Fragment } from 'react'
import { useEffect } from 'react'
function App() {
  // let count = 0
 const [count, setCount]= useState(0)

 useEffect(() => {
  console.log("Component rendered")

  return() => {
    console.log("Component Unmounted")
  }
 },[count])
  const increment = () => {
    // count++
    setCount(count+1)
    console.log("Count increment", count)
  }

  const decrement = () => {
    setCount(count-1)
  }
  return (

<div className="app">
  <h1>Counter App</h1>
  <p> count: {count}</p>
  <button onClick={increment}>Increment</button>
  <button onClick={decrement}>Decrement</button>
</div>

  )
}

export default App
