

import { useState, useCallback } from 'react'
import './App.css'

function App() {
  const [length, setlength] = useState(8)
  const [numberAllowed, setnumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setpassword] = useState("")

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "QAZXSWEDCVFRTGBNHYUJMKIOLPqazxswedcvfrtgbnhyujmkiolp"
    if (numberAllowed) str += "0123456789"
    if (charAllowed) str += "!@#$%^&*()"

    for(let i = 1; i<= array.length; i++){
      let char = Math.floor(Math.random() * str.length + 1)
      pass=str.charAt(char)
    }
    setpassword(pass)

  }, [length, charAllowed, setpassword, numberAllowed])
  return (
    <>
      <h1 className='text-4xl text-center text-white'>Password Generator</h1>
    </>
  )
}

export default App
