import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { login } from '../actions/userActions'
import '../css/style.css'

const LoginScreen = ({ location, history }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const dispatch = useDispatch()

  const userLogin = useSelector((state) => state.userLogin)
  const { loading, error, userInfo } = userLogin

  const redirect = location.search ? location.search.split('=')[1] : '/'
  
  useEffect(() => {
    if (userInfo) {
      if(userInfo.isAdmin)
      {
          history.push('/admin/productlist')
      }
      else{
        history.push(redirect)
      }
    }
  
  }, [history, userInfo, redirect])

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(login(email, password))
  }

  return (<>
    <div className="form-container sign-up-container">
            <form onSubmit={submitHandler}>
                <h1>Login</h1>
      {error?<Message>{error}</Message>:''}
                <div className="form-control">
                  <label htmlFor="name">Email Address</label>
                  <input type="email" placeholder=""  value={email}
            onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div className="form-control">
                  <label htmlFor="name">Enter Password</label>
                  <input type="password" placeholder="" value={password}
            onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <button className="button button--hollow  justify-end inline-block" type='submit' variant='primary'>Login</button>
            </form>
        </div>
  </>
  )
}
    


export default LoginScreen
