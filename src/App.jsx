
import './App.css'

const users = [
  {
    id: 1,
    name:'Charles',
    address:'Rua José correia dos santos',
    age:'43',
    isAdmin:'false',
  },
  {
    id: 2,
    name:'daniela',
    address:'julio longhi',
    age:'49',
    isAdmin:'true',
  },
  {
    id: 3,
    name:'joel',
    address:'mogi mirim',
    age:'28',
    isAdmin:'false',
  },

  {
    id: 4,
    name:'fabíola',
    address:'mogi guaçu',
    age:'30',
    isAdmin:'false',
  }
]

function App() {
  
  
  return (
    <>
     
     <div>
       <h1> Charles busso</h1>
      </div>
      <p className="read-the-docs">
        Aprendendo react
      </p>
      <div>{users.map((user)=> (
        
        <div>{user.name}, {user.age},{user.address}</div>
      ))}</div>
      
    </>
  )
}

export default App
