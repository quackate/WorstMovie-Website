import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Link, useNavigate } from "react-router-dom";
import { WavyContainer, WavyLink } from "react-wavy-transitions";

import { MovieCard } from "../component/movie-card";
import { Watchlist_Item } from "../component/watchlist-item";
import { BigTen } from "../component/big_ten";
import { SmallTen } from "../component/small_ten";

export const Home = () => {
	const { store, actions } = useContext(Context);
	const [watchlist, setWatchlist] = useState([])
	const [topTen, setTopten] = useState([])

	useEffect(() => {
		if (actions.getToken()) {
			actions.getWatchlistFromDB(setWatchlist);
		}
		actions.getTopTen(setTopten);
		actions.getToken();
	}, []);

	/*const nav = useNavigate();
	useEffect(()=>{
		if(store.token){
			console.log("Go ahead.")
		  }
		  else {
			nav('/login')
		  }
	  },[])*/

	return (
		<div className="main-wrapper mt-5">
			<div className="wrapper-first-section">
				<div className="row">
					<div className="movie-section col-xs-12 col-sm-12 col-md-12 col-lg-8 col-xl-8 col-xxl-8">
						<div className="d-flex">
							<i className="main-icon fas fa-star"></i>
							<div>
								<h1 className="main-title">Top 10</h1>
								<h1 className="purple-title main-title">Worst Movies</h1>
								<p className="main-title">(You guys have voted for)</p>
							</div>
						</div>
						<div className="topten-section">
							{topTen.slice(0, 1).map((movies, index) => (
								<BigTen image={movies.image} title={movies.title} id={movies.id} />
							))}
							<div className="restof-topt-section row g-0">
								{topTen.slice(1).map((movies, index) => (
									<SmallTen image={movies.image} title={movies.title} number={index + 2} id={movies.id} />
								))}
							</div>
						</div>
					</div>
					<div className="sidebar-section col-xs-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4">
						<h2 className="title text-center mt-5">What to watch</h2>
						<h1 className="light-yellow title text-center mb-3 watchlist-title">Watchlist</h1>
						<div className="watchlist-items y-scrollbar">
							{store.token && store.watchlist.length === 0 ? (
								<div className="empty-watchlist text-center mt-5 mx-4">
									<i className="fa-solid fa-bookmark fs-1 mb-4 watchlist-bookmark"></i>
									<h3><strong>Your watchlist is empty</strong></h3>
									<h5>Save some movies you want to watch here!</h5>
									<div class="watchlist-browse-btn mt-5">
										<a className="watchlist-btn-link" href="#movies-selection">
											<span className="span-border span1"></span>
											<span className="span-border span2"></span>
											<span className="span-border span3"></span>
											<span className="span-border span4"></span>
											Browse Movies!
										</a>
									</div>
								</div>
							) : <div>
								{watchlist?.map((movies, index) => (
									<Watchlist_Item img_src={movies.image} title={movies.title} rating={movies.rating} index={index} id={movies.id} />
								))} </div>
							}
							{!store.token ? (
								<div className="watchlist-signin empty-watchlist text-center mt-5 mx-4">
									<i className="fa-solid fa-bookmark fs-1 mb-4"></i>
									<h4 className="mb-3"><strong>Looks like you're not <br></br>logged in!</strong></h4>
									<h5>Sign in or register to add some movies to your watchlist!</h5>
									{/*<WavyContainer/>*/}
									{/*<WavyLink to="/login" color="#8f44fd" duration={950}>*/}
									<Link to="/login" style={{ textDecoration: 'none' }}>
										<div class="watchlist-signin-btn mt-5">
											<p className="watchlist-btn-link">
												<span className="span-border span1"></span>
												<span className="span-border span2"></span>
												<span className="span-border span3"></span>
												<span className="span-border span4"></span>
												Go to Sign In!
											</p>
										</div>
									</Link>
									{/*</WavyLink>*/}
								</div>
							) : ""}
						</div>
					</div>
				</div>

			</div>
			<div className="wrapper-second-section me-3 mt-5">
				<div className="d-flex">
					<i className="icon fas fa-film"></i>
					<div>
						<h2 className="main-title">Want some <span className="italic really-bad-text">really bad</span> movie recommendations? </h2>
						<h2 className="purple-title main-title mb-4">We got you!</h2>
						<p id="movies-selection" className="main-title fs-5">What are you in the mood for?</p>
					</div>
				</div>

				<h1 className="genre-title title mt-5 mb-3"><i className="light-yellow fas fa-caret-right"></i> Horror</h1>
				<div className="movies-by-genre-section h-scrollbar d-flex">
					{store.horror_movies?.map((movies) => (
						<MovieCard poster_path={movies.poster_path} title={movies.title} vote_average={movies.vote_average} id={movies.id} />
					))}
				</div>
				<h1 className="genre-title title mt-5 mb-3"><i className="light-yellow fas fa-caret-right"></i> Romance</h1>
				<div className="movies-by-genre-section h-scrollbar d-flex">
					{store.romance_movies?.map((movies) => (
						<MovieCard poster_path={movies.poster_path} title={movies.title} vote_average={movies.vote_average} id={movies.id} />
					))}
				</div>
				<h1 className="genre-title title mt-5 mb-3"><i className="light-yellow fas fa-caret-right"></i> Action</h1>
				<div className="movies-by-genre-section h-scrollbar d-flex">
					{store.action_movies?.map((movies) => (
						<MovieCard poster_path={movies.poster_path} title={movies.title} vote_average={movies.vote_average} id={movies.id} />
					))}
				</div>
			</div>
		</div>
	);
};

// Fix responsiveness once the website is done!!