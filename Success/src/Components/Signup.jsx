import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import img4 from './Images/sign.gif';

function Signup() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async () => {
    try {
      if (!username || !email || !password) {
        throw new Error("All fields are required");
      }
  
      const response = await fetch("http://localhost:3000/signup", {
        method: "POST",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify({
          username,
          email,
          password
        })
      });
  
      if (!response.ok) {
        console.error("Error:", error.message);
        alert(`Error: ${error.message}`);
      } else {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to create user");
      }
    } catch (e) {
      alert("User created successfully");
      window.location.href = "/";
    }
  };
  

  return (
    <div className='flex justify-center items-center h-screen pl-20'>
      <img src={img4} alt="" className='pl-5 mt-10 rounded-2xl' style={{ width: 700 }} />
      <div className="container mt-16 pl-14">
        <div className="form_area">
          <p className="title">SIGN UP</p>
          <form onSubmit={handleSubmit}>
            <div className="form_group">
              <label className="sub_title" htmlFor="name">
                Name
              </label>
              <input
                placeholder="Enter your full name"
                className="form_style"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="form_group">
              <label className="sub_title" htmlFor="email">
                Email
              </label>
              <input
                placeholder="Enter your email"
                id="email"
                className="form_style"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form_group">
              <label className="sub_title" htmlFor="password">
                Password
              </label>
              <input
                placeholder="Enter your password"
                id="password"
                className="form_style"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div>
              <button type="submit" className="btn">SIGN UP</button>
              <p>
                Have an Account?{' '}
                <Link to={'/login'} className="link">
                  Login Here!
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
