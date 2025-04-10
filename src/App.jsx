import { useState } from 'react'
import './App.css'
import Authenticate from './components/Authenticate'
import SignUpForm from './components/SignUpForm'

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] =useState(null);
  const [token, setToken] = useState(null);
  return (
    <>
    <SignUpForm 
    setToken={setToken}
    username={username}
    setUsername={setUsername}
    password={password}
    setPassword={setPassword}
    token={token}/>
    <Authenticate token={token}/>
    </>
  )
}

export default App
