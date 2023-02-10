import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Login() {
  const [credentials, setCredentials] = useState({email: "", password: ""})
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    const response = await fetch('http://localhost:3001/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({email: credentials.email, password: credentials.password })
    })
    const data  = await response.json()
    console.log(data)

    if(data.success){
      alert('Login Successful')
      localStorage.setItem('authToken', data.authToken)
      console.log(localStorage.getItem('authToken'))
      navigate('/')


    } else{
      alert('User Not found')
    }
  }

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value })
  }

  return (
    <div className='d-flex justify-content-center mt-5'>
    <form className='p-5 bg-light' style={{ width: '40vw' }} onSubmit={handleSubmit}>
      <div className="mb-3">
        <label className="form-label">Email address</label>
        <input type="email" className="form-control" name='email' value={credentials.email} onChange={handleChange} />
      </div>
      <div className="mb-3">
        <label className="form-label">Password</label>
        <input type="password" className="form-control" name='password' value={credentials.password} onChange={handleChange} />
      </div>
      <button type="submit" className="btn btn-secondary me-3">Login</button>
      <Link to='/createuser' className='btn btn-info text-white'>Create Account</Link>
    </form>
  </div>
  )
}

export default Login
