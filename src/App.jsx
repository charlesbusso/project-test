
/*import './App.css'
import { useState } from 'react'
import Modal from './components/modal'


function App() {
  const [count, setCount] = useState(0)
  const [valueInput, setValueInput] = useState('')
  const [openModal, setOpenModal] = useState(false)
  const [openModal2, setOpenModal2] = useState(false)
  
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
      <button onClick={() => setOpenModal2(true) }>Abrir Modal 2</button>
    </div>
    <Modal isOpen= {openModal} setModalOpen ={() => setOpenModal(!openModal)}>
    {<p>Oi , eu sou Charles Busso</p>}
    </Modal>
    <Modal isOpen= {openModal2}
     setModalOpen ={() => setOpenModal2(!openModal2)}>
    {<p>Oi , eu sou Charles Busso modal 2</p>}
    </Modal>
   </div>
   
  )
}

export default App
*/