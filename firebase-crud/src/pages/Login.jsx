import React, { useState } from 'react'
import { auth, googleProvider } from '../../config/firebase'
import {signInWithEmailAndPassword, signInWithPopup, } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'


const Login = () => {
const [email, setEmail] = useState("")
const [password, setPassword] = useState("")
const navigate = useNavigate()

const signIn = async(e) => {
  e.preventDefault()

  try{
     await signInWithEmailAndPassword(auth, email, password)
     navigate("/home")
    }
  catch(error)
    {
      console.error("Error signing in", error)
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
    <div className='app'>
    <form>
      <h1>Login</h1>
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
        <button type="submit" onClick={signIn}>Login</button>
        <p onClick={signInWithGoogle} style={{cursor:"pointer"}}>
          Sign in with Google
        </p>
        <p>Don't have an account ? <Link to="/">Signup</Link></p>
    </form>
    </div>
  )
}

export default Login
