import Auth from "./components/Auth"
import Home from "./components/Home"
import Login from "./components/Login"
import {BrowserRouter, Routes, Route} from "react-router-dom"

function App() {

  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Auth/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
         </Routes>
      </BrowserRouter>
  )
}

export default App
