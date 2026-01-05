import { useEffect, useState } from 'react'
import './App.css'

function App() {

  let [userData, setUserData] = useState([]);

  useEffect(()=>{
    getUsersData();
  }, []);

  async function getUsersData(){
    const url = "https://dummyjson.com/users";
    let response = await fetch(url);
    let data = await response.json();
    setUserData(data.users);
  }
  

  return (
    <>
      <h1>Fetch data from Api</h1>
      <ul className='header'>
            <li>firstName</li>
            <li>lastName</li>
            <li>age</li>
            <li>gender</li>
            <li>email</li>
          </ul>
      {userData && userData.map(user=>{
        return(
          <ul className='body'>
            <li>{user.firstName}</li>
            <li>{user.lastName}</li>
            <li>{user.age}</li>
            <li>{user.gender}</li>
            <li>{user.email}</li>
          </ul>
        )
      })}
    </>
  )
}

export default App
