import React, { useState, useContext } from "react";
import "../../styles/registration.css";
import { Context } from "../store/appContext";
import { Link, useNavigate } from "react-router-dom";
import { WavyContainer, WavyLink } from "react-wavy-transitions";

export const Registration = () => {
  const [userName, setUserName] = useState();
  const { store, actions } = useContext(Context);
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const nav = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userName, name, email);
    actions.signUp(userName, name, email, password, alert);
  };

  return (
    <form className="text-center" onSubmit={handleSubmit} action="/login">
      <WavyContainer />
      <div className="logo-wrapper mt-5 mb-2">
        <WavyLink to="/" direction="up" color="#8f44fd" duration={950}>
          <img src="https://i.postimg.cc/RVH9yJfR/movie-resized-logo.png" className="reg-logo" />
        </WavyLink>
      </div>
      <div className="form-wrapper mb-5">
        <h2 className="text-light-reg mt-4"><span className="purple-reg-title">Create</span> Account<span className="yellow-reg-title">!</span></h2>
        <div className="superFormWrappa2">
          <div className="formWrappa2 mb-3">
            <div className="mb-3">
              <label htmlFor="username" className="form-label form-texts">Username</label>
              <input type="text" className="form-control reg-inputs" placeholder="Type your username" id="username" onChange={(e) => setUserName(e.target.value)} />
            </div>
            <div className="mb-3">
              <label htmlFor="name" className="form-label form-texts">Name</label>
              <input type="text" className="form-control reg-inputs" placeholder="Type your name"
                id="name" onChange={(e) => setName(e.target.value)} />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label form-texts">Email address</label>
              <input type="email" className="form-control reg-inputs"
                placeholder="Type your email" id="email"
                aria-describedby="emailHelp" onChange={(e) => setEmail(e.target.value)} />
              <div id="emailHelp" className="form-text mt-2">We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label form-texts">Password</label>
              <input type="password" className="form-control reg-inputs"
                placeholder="Type your password"
                id="password" onChange={(e) => setPassword(e.target.value)} />
            </div>
            <button type="submit" className="btn btn-light reg-button mt-5">Create your account</button>
          </div>
        </div>
        <div className="already-account text-white">
          <p>Already have an account?&nbsp;&nbsp;
            <Link to="/login">
              <span className="account-redirect">Sign in!</span>
            </Link>
          </p>
        </div>
      </div>
    </form>
  );
};