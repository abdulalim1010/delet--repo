
import './App.css'
import User from './components/User'
const userPromise = fetch('http://localhost:3000/users')
.then(res=>res.json())

function App() {


  return (
    <>
     
      <h1>simple crud operatrion</h1>
      <User userPromise={userPromise}></User>
    </>
  )
}

export default App
