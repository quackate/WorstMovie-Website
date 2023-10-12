import React, { useState, useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/login.css";
import { Context } from "../store/appContext";

export const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const { store, actions } = useContext(Context);

  const nav = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(actions.logIn(email, password));
    actions.logIn(email, password) ? nav("/") : "";
  };

  return (
    <form className="text-center my-5" onSubmit={handleSubmit}>
      <div className="login-logo-wrapper mt-5 mb-2">
        <img src="https://i.postimg.cc/RVH9yJfR/movie-resized-logo.png" className="login-logo" />
      </div>
      <div className="login-wrapper">
        <h1 className="text-light mt-4"><span className="purple-login-title">Sign</span> in<span className="yellow-login-title">!</span></h1>
        <div className="superFormWrappalogin p-0">
          <div className="formWrappal ">
            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label input-texts">Email address</label>
              <input type="email" className="form-control login-inputs"
                placeholder="Type your email adress here" id="exampleInputEmail1"
                aria-describedby="emailHelp" onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="mb-3">
              <label for="exampleInputPassword1" className="form-label input-texts">Password</label>
              <input type="password" className="form-control login-inputs"
                placeholder="Type your password here"
                id="exampleInputPassword1" onChange={(e) => setPassword(e.target.value)} />
              <Link to="/resset">
              <p className="mt-3">Forgot your password?</p>
              </Link>
            </div>
            <div className="text-center justify-content-center d-flex mt-5">
              <button type="submit" className="btn btn-light login-button me-2" >Sign in</button>
            </div>
            <div className="sign-up mb-3">
              <p className="text-white mt-5">New to our website?</p>
              <div className="text-center">
                <Link to="/registration">
                  <button type="submit" className="btn btn-light signup-button">Create your account</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>

  );
};

//${store.token ? "btn-success": "btn-danger" }