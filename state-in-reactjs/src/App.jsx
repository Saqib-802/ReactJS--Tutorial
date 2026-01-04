import { useState } from 'react'
import './App.css'

function App() {
  let [count, setCount] = useState(0);
  let [string, setString] = useState("saqib");

  const handleIncrement = () => {
      setCount(count++)
  }

  const handleDecrement = ()=>{
    setCount(count--)
  }
  return (
    <>
      <h1>learn state management with saqib : {string}</h1>
      <h1>counter App</h1>
      <p>count : {count}</p>
      <button onClick={handleIncrement}>increment</button>
      <button onClick={handleDecrement}>decrement</button>
    </>
  )
}

export default App
