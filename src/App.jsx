
import './App.css'
import { useState } from 'react'
import Modal from './components/modal'

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
  const [count, setCount] = useState(0)
  const [valueInput, setValueInput] = useState('')
  const [openModal, setOpenModal] = useState(false)
  
  const add = () => {
    setCount(count + 1)
    
  }

  const  onChangeInput = (event) =>{
    setValueInput(event.target.value)
  }
  
  return (
   <div className='App'>
    <h1>Charles Busso</h1>
    <h3>{count}</h3>
    <button onClick={add}>Adicionar</button>
    <div>
      <input onChange={onChangeInput}>
      </input>
    </div>
    <h3>{valueInput}</h3>
    <div>
      <button onClick={() => setOpenModal(true) }>Abrir Modal</button>
    </div>
    <Modal isOpen= {openModal}/>

   </div>
   
  )
}

export default App
