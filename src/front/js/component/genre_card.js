import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/genre_card.css";
import PropTypes from "prop-types";

export const GenreCard = (props) => {
    const { store, actions } = useContext(Context);

    /*const [watchlist, setWatchlist] = useState([])

    useEffect(() => {
		if (actions.getToken()) {
			actions.getWatchlistFromDB(setWatchlist);
		}
		actions.getToken();
	}, []);*/

    return (
        <div className="container my-5">
            <div className="genrecard-wrapper d-flex text-white">
                <div className="poster-side">
                    <Link to={`/detail/${props.id}`}>
                        <img src={`https://image.tmdb.org/t/p/original${props.poster_path}`} className="genrecard-img" alt="..." />
                    </Link>
                </div>
                <div className="info-side ms-3">
                    <div className="d-flex genretop-wrapper pe-4">
                        <div>
                            <h4 className="genrecard-title">{props.title}</h4>
                            <div className="sub-items">
                                <p>{props.date} &nbsp;&nbsp;| <i className="yellow fas fa-star ms-2"></i> &nbsp;{props.vote_average}&nbsp; / 10</p>
                            </div>
                        </div>
                        <h2 onClick={() => {store.token ? actions.addToWatchlist(props) : alert("Please, sign in or register first! :)")}}><i className=/*'genrecard-bookmark far fa-bookmark'*/{`genrecard-bookmark ${store.watchlist.some(movie => movie.id === props.id) ? 'fas fa-bookmark': 'far fa-bookmark'}`}></i></h2>
                    </div>
                    <p className="genrecard-description">{props.description}</p>
                </div>
            </div>
        </div>
    );
};