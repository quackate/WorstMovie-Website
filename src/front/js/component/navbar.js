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
					{/*<div className="more-genres text-white me-auto pt-3 ms-2">
						<p><strong>Movies by genre &nbsp;</strong><i className="fas fa-chevron-circle-down"></i></p>
					</div>*/}
					<div className="dropdown more-genres me-auto ms-2">
						<button className="btn btn-light dropdown-toggle genres-btn" type="button" data-bs-toggle="dropdown" aria-expanded="false">Movies by genre</button>
						<ul className="dropdown-menu scrollbar">
							<Link to='/genre/action'>
								<li className="dropdown-item">Action</li>
							</Link>
							<Link to='/genre/adventure'>
								<li className="dropdown-item">Adventure</li>
							</Link>
							<Link to='/genre/animation'>
								<li className="dropdown-item">Animation</li>
							</Link>
							<Link to='/genre/comedy'>
								<li className="dropdown-item">Comedy</li>
							</Link>
							<Link to='/genre/crime'>
								<li className="dropdown-item">Crime</li>
							</Link>
							<Link to='/genre/documentary'>
								<li className="dropdown-item">Documentary</li>
							</Link>
							<Link to='/genre/drama'>
								<li className="dropdown-item">Drama</li>
							</Link>
							<Link to='/genre/family'>
								<li className="dropdown-item">Family</li>
							</Link>
							<Link to='/genre/fantasy'>
								<li className="dropdown-item">Fantasy</li>
							</Link>
							<Link to='/genre/history'>
								<li className="dropdown-item">History</li>
							</Link>
							<Link to='/genre/horror'>
								<li className="dropdown-item">Horror</li>
							</Link>
							<Link to='/genre/music'>
								<li className="dropdown-item">Music</li>
							</Link>
							<Link to='/genre/mystery'>
								<li className="dropdown-item">Mystery</li>
							</Link>
							<Link to='/genre/romance'>
								<li className="dropdown-item">Romance</li>
							</Link>
							<Link to='/genre/sciencefiction'>
								<li className="dropdown-item">Science Fiction</li>
							</Link>
							<Link to='/genre/thriller'>
								<li className="dropdown-item">Thriller</li>
							</Link>
						</ul>
					</div>
					<form className="form-inline d-flex me-4">
						<input className="form-control search-input mr-sm-2 me-2" type="search" placeholder="Search" aria-label="Search" />
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
