import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import "../../styles/resset.css";
import { Context } from "../store/appContext";

export const Resset = () => {
    const [email, setEmail] = useState();
    const { store, actions } = useContext(Context);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
        actions.sendForgotPasswordEmail(email, alert);
    };

    return (
        <form className="text-center my-5" onSubmit={handleSubmit}>
            <div className="reset-logo-wrapper mt-5 mb-2">
                <Link to='/'>
                    <img src="https://i.postimg.cc/RVH9yJfR/movie-resized-logo.png" className="reset-logo" />
                </Link>
            </div>
            <div className="reset-wrapper">
                <h1 className="reset-text-light mt-4"><span className="purple-reset-title">Reset</span> Password<span className="yellow-reset-title">!</span></h1>
                <p className="text-white mt-3">Enter the email address associated with your account, then click Continue.</p>
                <div className="superFormWrapreset p-0">
                    <div className="formWrapper">
                        <div className="mb-3">
                            <label for="exampleInputEmail1" className="form-label reset-input-texts">Email</label>
                            <input type="email" className="form-control reset-inputs"
                                placeholder="Type your email adress here to reset your password" id="exampleInputEmail1" onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className="text-center justify-content-center d-flex mt-5">
                            <button type="submit" className="btn btn-light reset-button me-2">Continue</button>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
};