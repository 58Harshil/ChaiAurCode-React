import { useState } from "react"

function App() {
  const [color, setColor] = useState("olive")

  return (
    <>
      <div className="w-full h-screen duration-200" style={{backgroundColor: color}}>
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-4 shadow-2xl bg-white px-3 py-2 rounded-2xl">
            <button onClick={() => setColor("Red")} className="outline-none px-4 text-white rounded-2xl" style={{backgroundColor: 'red'}}>Red</button>
            <button onClick={() => setColor("Green")} className="outline-none px-4 text-white rounded-2xl" style={{backgroundColor: 'Green'}}>Green</button>
            <button onClick={() => setColor("Orange")} className="outline-none px-4 text-white rounded-2xl" style={{backgroundColor: 'Orange'}}>Orange</button>
            <button onClick={() => setColor("Pink")} className="outline-none px-4 text-white rounded-2xl" style={{backgroundColor: 'Pink'}}>Pink</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App