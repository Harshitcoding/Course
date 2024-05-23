import React from 'react'
import img5 from './Images/developmentanimation.gif'
function Login() {
  return (
   <div className='flex mt-32 justify-around'>
    <div style={{width : 700}} className='mix-blend-screen'>
    <img src={img5} />
    </div>
     <div>
      <form className="form">
  <div className="title">
    Welcome,
    <br />
    <span>Login to continue</span>
  </div>
  <input className="input" name="email" placeholder="Email" type="email" />
  <input
    className="input"
    name="password"
    placeholder="Password"
    type="password"
  />
  <div className="login-with">
  </div>
  <button className="button-confirm">Let`s go →</button>
</form>

    </div>
   </div>
  )
}

export default Login