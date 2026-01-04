import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  console.log(<h1>hello world!</h1>)

  return (
    <main>
       <img src="/public/reactlogo.png" alt="reactlogo" width={50}/>
       <h1>fun facts a bout reactjs</h1>
       <ul>
        <li>was first released in 2013</li>
        <li>powerd by meta</li>
        <li>used by thousands of company</li>
        <li>high job market</li>
        <li>hugh community support</li>
        <li>easy to learn</li>
       </ul>
    </main>
  )
}

export default App
