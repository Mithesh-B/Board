
"use client";
import React, {useState}from 'react';
import './login.scss'




const Login = () => {

  //basic login handeling

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };



  return (
    <div className='login'>
      <div className='heading'>
        <h1 className='signIn'>Sign In</h1>
        <h3 className='signIn_text'>Sign in to your account</h3>
      </div>
        <div className='google_apple'>
            <button className="google"><img src="/assets0/google.png" alt="" />  Sign in with Google</button>
            <button className="apple"> <img src="/assets0/apple.png" alt="" /> Sign in with Apple</button>
        </div>
        <div className="signup">
          <form onSubmit={handleSubmit}>
            <label className='email'>
            Email address
              <input type="email" value={email} onChange={handleEmailChange} placeholder='email' />
            </label>
            <label className='password'>
            Password
              <input type="password" value={password} onChange={handlePasswordChange} placeholder='password' />
            </label>
            <div className='forgot_password'>Forgot password?</div>
            <button onClick={()=>handleSubmit()} type="submit">Sign In</button>
          </form>
        </div>
        <div className='register'>Don't have an account?<span> Register here</span></div>
    </div>
  )
}

export default Login
