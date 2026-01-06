import { useEffect, useState } from 'react'
import './App.css'

function App() {
  let [userData, setUserDta] = useState([]);
  let [loading, setLoading] = useState(false);

  let getUserData = async ()=>{
  const url = "http://localhost:3000/users";
  let response = await fetch(url);
  response = await response.json();
  console.log(response);
  setUserDta(response);
  setLoading(false);
  }

  useEffect(()=>{
    setLoading(true);
    getUserData();
  }, [])

  return (
    <>
      <h1>Integration of json server API and loader</h1>
      <ul className='user-list  user-list-header'>
            <li>User</li>
            <li>Name</li>
            <li>Age</li>
          </ul>
      {!loading? 
      userData.map((user)=>(
          <ul key={user.id} className='user-list'>
            <li>{user.id}</li>
            <li>{user.name}</li>
            <li>{user.age}</li>
          </ul>
      ))
      : <div className="spinner-border text-secondary" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      }
    </>
  )
}

export default App
