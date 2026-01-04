import { useEffect, useState } from 'react'

import './App.css'

function App() {
  let [count, setCount] = useState(0);
  let [data, setData] = useState("");

  useEffect(() =>{
    getData();
    console.log(data);
  }, [count])
  
  function getData(){
    setData("welcome to useeffect concept");
  }

  return (
    <>
      <h1>{data}</h1>
      <h4>counter : {count}</h4>
      <button onClick={()=>{setCount(count++)}}>increment</button>
    </>
  )
}

export default App
