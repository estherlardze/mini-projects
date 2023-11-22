import React from 'react'
import { Link } from 'react-router-dom'
import {signOut} from 'firebase/auth'
import { auth } from '../../config/firebase'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {

const navigate = useNavigate()

const logOut = () => {
    signOut(auth)
    navigate('/')
} 

  return (
    <nav>
      <h1>Contact App</h1>
      <div>
        <Link className='link' to="/home">Home</Link>
        <Link className='link' to="/add">Add Contact</Link>
        <Link className='link' to="/about">About</Link>
        <button type='button' onClick={logOut}>Logout</button>
      </div>
    </nav>
  )
}

export default Navbar
