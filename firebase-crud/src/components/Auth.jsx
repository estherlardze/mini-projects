import React, { useState } from 'react'
import { auth, googleProvider } from '../../config/firebase'
import {createUserWithEmailAndPassword, signInWithPopup} from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'


const Login = () => {
const [email, setEmail] = useState("")
const [password, setPassword] = useState("")
const navigate = useNavigate()

const signIn = async(e) => {
  e.preventDefault()

  try{
     await createUserWithEmailAndPassword(auth, email, password)
     navigate("/home")
    }
  catch(error)
    {
      console.error("Error creating user", error)
     }}



  const signInWithGoogle = async(e) => {
    e.preventDefault()
  
    try{
        await signInWithPopup(auth, googleProvider)
        navigate("/home")
      }
    catch(error)
      {
        console.error("Error creating user", error)
        }}

  return (
    <form>
      <input type="email"
        placeholder='Email' 
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{}}
        />
        <input type="password"
        placeholder='password' 
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{}}
        />
        <button type="submit" onClick={signIn}>Sign up</button>
        <p onClick={signInWithGoogle}>Sign in with Google</p>
        <p>Already have an account? <Link to="/login">Login</Link></p>
    </form>
  )
}

export default Login
