import React, { useState, useContext } from "react";
import { Link, useSearchParams, useNavigate } from "react-router-dom";
import "../../styles/resset.css";
import { Context } from "../store/appContext";
import { WavyContainer, WavyLink } from "react-wavy-transitions";

export const Set_NewPassword = () => {
    const { store, actions } = useContext(Context);
    const [searchParams] = useSearchParams();

    const [password, setPassword] = useState();
    const [repeatPass, setRepeatPass] = useState();

    const nav = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();
        const token = searchParams.get('token');
        if (!token) alert("Error: No token. We can't reset the password.");
        else if (password !== repeatPass) alert("Passwords don't match!")
        else {
            actions.setNewPassword(token, password, alert);
        }
    };

    return (
        <form className="text-center my-5" onSubmit={handleSubmit}>
            <div className="reset-logo-wrapper mt-5 mb-2">
                <Link to="/">
                    <img src="https://i.postimg.cc/RVH9yJfR/movie-resized-logo.png" className="reset-logo" />
                </Link>
            </div>
            <div className="reset-wrapper">
                <h1 className="reset-text-light mt-4"><span className="purple-reset-title">Reset</span> Password<span className="yellow-reset-title">!</span></h1>
                <div className="superFormWrapreset p-0">
                    <div className="formWrapper">
                        <div className="mb-3">
                            <label for="password" className="form-label reset-input-texts">New Password</label>
                            <input type="password" className="form-control reset-inputs"
                                placeholder="Enter your new password" id="password" onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <div className="mb-3">
                            <label for="repeatpass" className="form-label reset-input-texts">Repeat Password</label>
                            <input type="password" className="form-control reset-inputs"
                                placeholder="Repeat your new password" id="repeatpass" onChange={(e) => setRepeatPass(e.target.value)} />
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