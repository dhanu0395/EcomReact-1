import React from 'react'
import './login.css'

const Login = () => {
  return (
    <div className='loginsignup'>
      <div className="loginsignupContainer">
        <h1>Signup</h1>
        <div className="loginsignup-inputfields">
          <input type="text" name="" placeholder='Your Name' id="" />
          <input type="email" name="" placeholder='Email Address' id="" />
          <input type="password" name="" placeholder='Password' id="" />
        </div>
        <button>Continue</button>
        <p className="haveAccount">Already have an Account? <span>Login here</span></p>
        <div className="loginsignup-agree">
          <input type="checkbox" name="" id="" />
          <p>By Contuining, i agree the terms of use & privacy policy.</p>
        </div>
      </div>

    </div>
  )
}

export default Login