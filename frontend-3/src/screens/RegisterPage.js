import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { register } from '../actions/userActions'
const RegisterScreen = ({ location, history }) => {
  
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [message, setMessage] = useState(null)

  const dispatch = useDispatch()

  const userRegister = useSelector((state) => state.userRegister)
  const { loading, error, userInfo } = userRegister

  const redirect = location.search ? location.search.split('=')[1] : '/'

  useEffect(() => {
    if (userInfo) {
      history.push(redirect)
    }
  }, [history, userInfo, redirect])
  const submitHandler = (e) => {
    e.preventDefault()
    // 
    if (password !== confirmPassword) {
      setMessage('Passwords do not match')
    } else {
      dispatch(register( email, password))
    }
  }

  return (

    <section>
			<div class="form-container sign-up-container">
	            <form onSubmit={submitHandler}>
	                <h1>Create Account</h1>
                  {message?<Message>{message}</Message>:''}
                  {error?<Message>{error}</Message>:''}         
	                <div class="form-control">
	                	<label for="email">Email Address</label>
	                	<input type="email" placeholder="" onChange={(e) => setEmail(e.target.value)}/>
	                </div>
	                <div class="form-control">
	                	<label for="password">Enter Password</label>
	                	<input type="password" placeholder="" onChange={(e) => {
                      setMessage(null)
                      setPassword(e.target.value)}}/>
	                </div>
	                <div class="form-control">
	                	<label for="cpassword">Confirm Password</label>
	                	<input type="password" placeholder="" onChange={(e) => 
                      {
                        setMessage(null)
                        setConfirmPassword(e.target.value)}}/>
	                </div>
	                <button class="button checkout_btn button--hollow">Sign Up</button>
	            </form>
	        </div>
		</section>)}

export default RegisterScreen

