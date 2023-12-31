import Home from "./components/Home"
import Login from "./components/Login"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import "./index.css"

function App() {

  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/home" element={<Home/>}/>
         </Routes>
      </BrowserRouter>
  )
}

export default App

