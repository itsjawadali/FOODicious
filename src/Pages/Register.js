import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Register() {

  const navigate = useNavigate()

  const [credentials, setCredentials] = useState({ name: "", email: "", password: "", location: "" })

  const handleSubmit = async (e) => {
    e.preventDefault()
    const response = await fetch('http://localhost:3001/createuser', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name: credentials.name, email: credentials.email, password: credentials.password, location: credentials.location })
    })
    const data  = await response.json()
    console.log(data)

    if(data.success){
      alert('User Created')
      navigate('/login')
    } else{
      alert('Enter Valid Credentials')
    }
  }

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value })
  }

  return (
    <div className='d-flex justify-content-center mt-5'>
      <form className='bg-light p-5' style={{ width: '40vw' }} onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input type="text" className="form-control" name='name' value={credentials.name} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input type="email" className="form-control" name='email' value={credentials.email} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input type="password" className="form-control" name='password' value={credentials.password} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label className="form-label">Location</label>
          <input type="text" className="form-control" name='location' value={credentials.location} onChange={handleChange} />
        </div>
        <button type="submit" className="btn btn-secondary me-3">Submit</button>
        <Link to='/login' className='btn btn-info text-white'>Already a User</Link>
      </form>
    </div>
  )
}

export default Register
