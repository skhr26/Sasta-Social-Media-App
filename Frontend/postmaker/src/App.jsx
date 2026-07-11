import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route} from "react-router-dom"
import Landing from './Components/Landing'
import CreatePost from './Components/CreatePost'
import AllPost from './Components/AllPost'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>

      <Routes>
        <Route path='/' element={<Landing/>}></Route>
        <Route path='/createpost' element={<CreatePost/>}/>
        <Route path='/getpost' element={<AllPost/>}/>
      </Routes>
      
      </BrowserRouter>


    </>
  )
}

export default App
