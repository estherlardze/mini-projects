import React from 'react'
import {signOut} from 'firebase/auth'
import { auth } from '../../config/firebase'
import { useNavigate } from 'react-router-dom'



const Home = () => {
const navigate = useNavigate()

const logOut = () => {
    signOut(auth)
    navigate('/')
}

  return (
    <div>
      <p>Hello</p>    
        <button type='button' onClick={logOut}>Logout</button>
      </div>
  )
}

export default Home
