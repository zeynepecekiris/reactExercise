import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'

function App() {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");


  useEffect(()=> {
    console.log("her zaman render edilir")
  } ) 

  useEffect(() =>{
    console.log("sadece ilk bir kere render edilir")
  }, [])

  useEffect(() =>{

  }, [firstName])

  useEffect(() =>{

  }, [lastName])

  return (
    <div>
      <div><button onClick={() => setFirstName("ece")}>Adı değiştir</button></div>
      <div><button onClick={() => setLastName("kırıs")}>Soyadı değiştir</button></div>

    </div>
  )
}

export default App
