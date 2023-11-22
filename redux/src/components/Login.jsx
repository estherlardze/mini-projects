import React, { useState, useEffect } from 'react'
import {useAuthState} from 'react-firebase-hooks/auth'
import { auth } from '../config/firebase'
import { useNavigate, useLocation} from 'react-router-dom'
import { isSignInWithEmailLink, sendSignInLinkToEmail, signInWithEmailLink } from 'firebase/auth'


const Login = () => {
const [email, setEmail] = useState("")
const [user] = useAuthState(auth)
const [loginLoading, setLoginLoading] = useState(false)
const [loginError, setLoginError] = useState("")
const [message, setMessage] = useState("")

const [initialError, setInitialError] = useState("")
const [initialLoading, setInitialLoading] = useState(false)

const location = useLocation()
const { search } = location;

const navigate = useNavigate()

  useEffect(() => {
    if(user){
        navigate('/')
      }
    else{
       if(isSignInWithEmailLink(auth, window.location.href)){
        let email = localStorage.getItem('email')
        if(!email){
          email = window.prompt("Enter your email")
        }
        setInitialLoading(true)
        signInWithEmailLink(auth, localStorage.getItem('email'), window.location.href)
        .then((result) => {
          console.log(result.user)
          localStorage.removeItem('email')
          setInitialError("")
          setInitialLoading(false)
          navigate("/home")
       }).catch((err) => {
          setInitialError(err.message)
          setInitialLoading(false)
          navigate('/')
       });   
      }
      else{
        console.log("Enter email and sign in")
      }
      }
    }, [user, search, navigate])


const handleSubmit = (e) => {
  e.preventDefault()

  setLoginLoading(true)
  sendSignInLinkToEmail(auth, email, {
    URL: 'http://localhost:5173/',
    handleCodeInApp: true
  }).then(() => {
    localStorage.setItem('email', email)
    setLoginLoading(false)
    setLoginError("")
    setMessage("We have sent you an email with a link to sign in")
  }).catch((err) => {
    setLoginLoading(false)
    setLoginError(err.message)
  })
}
  
  return (
     <form onSubmit={handleSubmit}> 
            <input type="email"
              placeholder='Email' 
              value={email || ''}
              onChange={(e) => setEmail(e.target.value)}
              style={{}}
            />
            <button type='submit'>
              {loginLoading ? <span>Logging you in</span> : <span>Log in</span>}
            </button>
    
            {loginError !== "" && (<div>{loginError}</div>)}
    
            {message !== "" && (<div>{message}</div>)}
          </form>
          )
                  
       
}

export default Login
