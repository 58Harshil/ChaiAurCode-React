import UserCard from "./components/UserCard"


function App() {
  

  return (
    
      <div className="cotainer">
        <UserCard desc="desc1" name="Love Harshil" style={{"border-radius":"10px"}} />
        <UserCard desc="desc2" name="Young Harshil" style={{"border-radius":"10px"}} />
        <UserCard desc="desc3" name="Old Harshil" style={{"border-radius":"10px"}} />
      </div>
    
  )
}

export default App
