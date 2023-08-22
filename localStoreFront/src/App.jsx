import { useState, useEffect } from 'react'
import { getAllInvtry } from "../services/inventaryServices";
import Cards from './components/Cards';
import './App.css'

function App() {
  const [invtry, setInvtry] = useState([])

  useEffect(() => {
    setInvtry(getAllInvtry());
  }, [])


  return (
    <>
      {
        invtry.map(invtry => <Cards invtry={invtry} key={invtry.id} />)
      }
    </>
  )
}

export default App
