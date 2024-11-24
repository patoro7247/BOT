import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FileUploadModal from './components/FileUploadModal' 
import MyResponsiveLine from './components/MyResponsiveLine'



function App() {
  let ex_data = [
    {
      "id": "france",
      "color": "hsl(146, 70%, 50%)",
      "data": [
        {
          "x": "plane",
          "y": 119
        },
        {
          "x": "helicopter",
          "y": 126
        },
        {
          "x": "boat",
          "y": 13
        },
        {
          "x": "train",
          "y": 26
        },
        {
          "x": "subway",
          "y": 218
        },
        {
          "x": "bus",
          "y": 156
        },
        {
          "x": "car",
          "y": 36
        },
        {
          "x": "moto",
          "y": 114
        },
        {
          "x": "bicycle",
          "y": 248
        },
        {
          "x": "horse",
          "y": 92
        },
        {
          "x": "skateboard",
          "y": 284
        },
        {
          "x": "others",
          "y": 217
        }
      ]
    },
    {
      "id": "norway",
      "color": "hsl(6, 70%, 50%)",
      "data": [
        {
          "x": "plane",
          "y": 79
        },
        {
          "x": "helicopter",
          "y": 236
        },
        {
          "x": "boat",
          "y": 70
        },
        {
          "x": "train",
          "y": 129
        },
        {
          "x": "subway",
          "y": 170
        },
        {
          "x": "bus",
          "y": 163
        },
        {
          "x": "car",
          "y": 297
        },
        {
          "x": "moto",
          "y": 60
        },
        {
          "x": "bicycle",
          "y": 198
        },
        {
          "x": "horse",
          "y": 296
        },
        {
          "x": "skateboard",
          "y": 156
        },
        {
          "x": "others",
          "y": 14
        }
      ]
    }
  ]

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
      <div style={{height: "500px", width:"1000px"}} >
        <button onClick={() => setIsModalOpen(true)}>Open Modal</button>

        <FileUploadModal isOpen={isModalOpen} onClose={handleModalClose} onSubmit={handleFileSubmit} />

        {/* <MyResponsiveLine data={ex_data} /> */}
        {!isModalOpen ? <MyResponsiveLine data={ex_data}/> : <></>}

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
