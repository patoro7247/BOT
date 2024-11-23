import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FileUploadModal from './components/FileUploadModal' 

function App() {
  const [count, setCount] = useState(0)

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalClose = () => {
    setIsModalOpen(false);
  }

  const handleFileSubmit = (file) => {
    console.log("File submitted: ", file);
  }

  return (
    <>
      <div>
        <button onClick={() => setIsModalOpen(true)}>Open Modal</button>

        <FileUploadModal isOpen={isModalOpen} onClose={handleModalClose} onSubmit={handleFileSubmit} />


      </div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
        </p>
      </div>
    </>
  )
}

export default App
