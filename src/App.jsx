import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Memes, { Cartas } from './components/Cartas'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Cartas></Cartas>
    </>
  )
}

export default App
