import './App.css'
import Cards from './components/Cards'

function App() {
  
  let myObject = {
    username: "Harshil",
    age: 20
  }
  
  let newArr = [1,2,3]

  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-md
      ">Tailwind test</h1>
      
      <Cards username="chai aur code" btnText="Click me "/>
      <Cards username="Harshil" btnText="Visit me" />
      <Cards />

    </>
  )
}


export default App
