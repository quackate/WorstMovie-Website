import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/navbar.css";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	const nav = useNavigate();

	/***/
	const [inputText, setInputText] = useState("");
	const [autocompleteResults, setAutocompleteResults] = useState([]);

	let inputHandler = (text) => {
		setInputText(text)

		if (text.trim() == "") {
			setAutocompleteResults([])
		}

		else {
			const fetchHorror = fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.MOVIEDB_API_KEY}&vote_average.lte=5.1&sort_by=vote_average.asc&with_genres=27&vote_average.gte=2&vote_count.gte=800`);
			const fetchRomance = fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.MOVIEDB_API_KEY}&vote_average.lte=5.2&sort_by=vote_average.asc&with_genres=10749&vote_average.gte=2&vote_count.gte=475`);
			const fetchAction = fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.MOVIEDB_API_KEY}&vote_average.lte=5.2&sort_by=vote_average.asc&with_genres=28%2C%2012&vote_average.gte=2&vote_count.gte=750`);
			const fetchAdventure = fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.MOVIEDB_API_KEY}&vote_average.lte=5&sort_by=vote_average.asc&with_genres=12&vote_average.gte=2&vote_count.gte=800`);
			const fetchAnimation = fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.MOVIEDB_API_KEY}&vote_average.lte=5.2&sort_by=vote_average.asc&with_genres=16&vote_average.gte=2&vote_count.gte=100`)
			const fetchComedy = fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.MOVIEDB_API_KEY}&vote_average.lte=5&sort_by=vote_average.asc&with_genres=35&vote_average.gte=2&vote_count.gte=800`)
			const fetchCrime = fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.MOVIEDB_API_KEY}&vote_average.lte=5.2&sort_by=vote_average.asc&with_genres=80&vote_average.gte=2&vote_count.gte=500`)
			const fetchDocumentary = fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.MOVIEDB_API_KEY}&vote_average.lte=5.2&sort_by=vote_average.asc&with_genres=99&vote_average.gte=2&vote_count.gte=45`)
			const fetchDrama = fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.MOVIEDB_API_KEY}&vote_average.lte=5.2&sort_by=vote_average.asc&with_genres=18&vote_average.gte=2&vote_count.gte=500`)
			const fetchFamily = fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.MOVIEDB_API_KEY}&vote_average.lte=5.2&sort_by=vote_average.asc&with_genres=10751&vote_average.gte=2&vote_count.gte=500`)
			const fetchFantasy = fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.MOVIEDB_API_KEY}&vote_average.lte=5.2&sort_by=vote_average.asc&with_genres=14&vote_average.gte=2&vote_count.gte=700`)
			const fetchHistory = fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.MOVIEDB_API_KEY}&vote_average.lte=5.2&sort_by=vote_average.asc&with_genres=36&vote_average.gte=2&vote_count.gte=30`)
			const fetchMusic = fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.MOVIEDB_API_KEY}&vote_average.lte=5.2&sort_by=vote_average.asc&with_genres=10402&vote_average.gte=2&vote_count.gte=35`)
			const fetchMystery = fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.MOVIEDB_API_KEY}&vote_average.lte=5.2&sort_by=vote_average.asc&with_genres=9648&vote_average.gte=2&vote_count.gte=400`)
			const fetchScienceFiction = fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.MOVIEDB_API_KEY}&vote_average.lte=5.2&sort_by=vote_average.asc&with_genres=878&vote_average.gte=2&vote_count.gte=800`)
			const fetchThriller = fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.MOVIEDB_API_KEY}&vote_average.lte=5.2&sort_by=vote_average.asc&with_genres=53&vote_average.gte=2&vote_count.gte=800`)

			Promise.all([fetchHorror, fetchRomance, fetchAction, fetchAdventure, fetchAnimation, fetchComedy, fetchCrime, fetchDocumentary, fetchDrama, fetchFamily, fetchFantasy, fetchHistory, fetchMusic, fetchMystery, fetchScienceFiction, fetchThriller])
				.then((responses) =>
					Promise.all(responses.map((response) => response.json()))
				)
				.then(([dataHorror, dataRomance, dataAction, dataAdventure, dataAnimation, dataComedy, dataCrime, dataDocumentary, dataDrama, dataFamily, dataFantasy, dataHistory, dataMusic, dataMystery, dataScienceFiction, dataThriller]) => {
					const combinedData = [
						...dataHorror.results.filter((result) =>
							result.title.toLowerCase().includes(text.toLowerCase())
						),
						...dataRomance.results.filter((result) =>
							result.title.toLowerCase().includes(text.toLowerCase())
						),
						...dataAction.results.filter((result) =>
							result.title.toLowerCase().includes(text.toLowerCase())
						),
						...dataAdventure.results.filter((result) =>
							result.title.toLowerCase().includes(text.toLowerCase())
						),
						...dataAnimation.results.filter((result) =>
							result.title.toLowerCase().includes(text.toLowerCase())
						),
						...dataComedy.results.filter((result) =>
							result.title.toLowerCase().includes(text.toLowerCase())
						),
						...dataCrime.results.filter((result) =>
							result.title.toLowerCase().includes(text.toLowerCase())
						),
						...dataDocumentary.results.filter((result) =>
							result.title.toLowerCase().includes(text.toLowerCase())
						),
						...dataDrama.results.filter((result) =>
							result.title.toLowerCase().includes(text.toLowerCase())
						),
						...dataFamily.results.filter((result) =>
							result.title.toLowerCase().includes(text.toLowerCase())
						),
						...dataFantasy.results.filter((result) =>
							result.title.toLowerCase().includes(text.toLowerCase())
						),
						...dataHistory.results.filter((result) =>
							result.title.toLowerCase().includes(text.toLowerCase())
						),
						...dataMusic.results.filter((result) =>
							result.title.toLowerCase().includes(text.toLowerCase())
						),
						...dataMystery.results.filter((result) =>
							result.title.toLowerCase().includes(text.toLowerCase())
						),
						...dataScienceFiction.results.filter((result) =>
							result.title.toLowerCase().includes(text.toLowerCase())
						),
						...dataThriller.results.filter((result) =>
							result.title.toLowerCase().includes(text.toLowerCase())
						)]
					setAutocompleteResults(combinedData)
				})
				.catch((error) => {
					console.log("Looks like there was a problem: \n", error);
				});
		}
	};

	const handleSelectAutocomplete = (item) => {
		setInputText(item.title);
		console.log(`details/${item.id}`)
		nav(`details/${item.id}`);
	};
	/***/

	return (
		<div>
			<nav className="navbar navbar-light ">
				<div className="container">
					<Link to="/">
						<span className="navbar-brand mb-0">
							<img src="https://i.postimg.cc/RVH9yJfR/movie-resized-logo.png" className="logo" />
						</span>
					</Link>
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
						<input className="form-control search-input mr-sm-2" type="search" placeholder="Search" aria-label="Search" autoComplete="on" list="searchlist" onChange={(e) => inputHandler(e.target.value)} value={inputText}/>
						<p className="icon-search my-2 my-sm-0"><i className="fas fa-search"></i></p>
						<datalist id="searchlist">
							{autocompleteResults.map((item, index) => (
								//<Link to={`/details/${item.id}`}>
									<option key={index} onClick={() => handleSelectAutocomplete(item)}>
										{item.title}
									</option>
								//</Link>
							))}
							{/*<option>
								{autocompleteResults.length == 0 ? "Oops! Looks like we don't have that movie right now!" : ""}
							</option>*/}
						</datalist>
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
