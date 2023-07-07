import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import API from '../../services/api';

import './Login.css';

export const Login = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const [email, setEmail] = useState('gaurav@mehla.in');
  const [password, setPassword] = useState('OnePiece');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    login();
    navigate("/");
    // API.post("/auth/login", {email, password})
    // .then(response => {
    //   if(response.status === 200) {
    //     login();
    //     navigate("/");
    //   }
    // })
    // .catch(error => {
    //   console.error('Login failed:', error);
    // });  
  };

  const goTo = (path) => {
    console.log("redirecting");
    navigate(path);
  }

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-6'>
          <div className="login-form">
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={handleEmailChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <div className="input-group">
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="Enter password"
                    value={password}
                    onChange={handlePasswordChange}
                  />
                </div>
              </div>

              <div className="form-group">
                <div className="row">
                  <div className="col">
                    <button type="submit" className="btn btn-primary btn-block">
                      Login
                    </button>
                  </div>
                </div>
              </div>
            </form>

            <div className="row">
              <div className="col">
                  <button className="btn btn-primary btn-block" onClick={() => {goTo("/sign-up")}}>
                    Signup
                  </button>
              </div>
            </div>

          </div>
        </div>
        <div className='col-md-6 sideImg'>
          <img src="https://i.imgur.com/Dc9mJwI.jpg" aria-hidden alt="Image"/>
        </div>
      </div>
    </div>
  );
};
