import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import HomePage from './components/home-page'
import Test from './components/Test'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <HomePage/>
      </>
  )
}

export default App
