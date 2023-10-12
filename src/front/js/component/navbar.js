import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "../../styles/navbar.css";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	return (
		<div>
			<nav className="navbar navbar-light ">
				<div className="container">
					<Link to="/">
						<span className="navbar-brand mb-0">
							<img src="https://i.postimg.cc/RVH9yJfR/movie-resized-logo.png" className="logo" />
						</span>
					</Link>
					<div className="more-genres text-white me-auto pt-3 ms-2">
						<p><strong>Movies by genre &nbsp;</strong><i className="fas fa-chevron-circle-down"></i></p>
					</div>
					<form className="form-inline d-flex me-4">
      					<input className="form-control search-input mr-sm-2 me-2" type="search" placeholder="Search" aria-label="Search"/>
      					<button className="btn btn-outline-light btn-search my-2 my-sm-0" type="submit"><i className="fas fa-search"></i></button>
    				</form>
					<div className="ml-auto">
						<Link to="/login">
							<div className="dropdown">
							{store.token ? 
								<button className="btn btn-light nav-login-btn" onClick={actions.logout} type="button">Sign Out</button> :
								<button className="btn btn-light nav-login-btn" type="button">Sign In</button>
							}
							</div>
						</Link>
					</div>
				</div>
			</nav>
			<h6 className="subtitle text-center py-3 m-0">Movies that might make you want to run out of the cinema!</h6>
		</div>
	);
};
