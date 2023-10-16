import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";
import "../../styles/detail.css";
import { useNavigate } from "react-router-dom";
import StarRatingComponent from 'react-star-rating-component';

export const Detail = () => {
    const { store, actions } = useContext(Context);
    const params = useParams();
    const [movieInfo, setMovieInfo] = useState({});
    const [videoKey, setVideoKey] = useState();
    const [userRating, setUserRating] = useState()

    /*const navigate = useNavigate();*/
    /*useEffect(() => {
        actions.getToken()
    }, [])*/

    /*const handleAddToWatchlist = (movie) => {
     actions.addToWatchlist(movie);
     console.log("movieposter",movie.poster_path)
     };*/

    const handleRatingClick = (nextValue) => {
        {
            store.token ?
                (setUserRating(nextValue) &&
                    //localStorage.setItem(`userRating-${params.movieId}`, nextValue.toString());
                    actions.rateMovie(movieInfo, nextValue))
                : alert("Please, sign in or register first! :)")
        }

    };

    useEffect(() => {
        actions.getTrailerForMovie(params.movieId, setVideoKey);
        actions.getMovieById(params.movieId, setMovieInfo);
        actions.getUserRating(params.movieId, setUserRating)
    }, [params.movieId, setMovieInfo, setVideoKey]);

    const imageUrl = `https://image.tmdb.org/t/p/w1280/${movieInfo.poster_path}`;

    return (
        <div className="page-content" style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${imageUrl})` }}>
            <div className="details-wrapper pb-5">
                <div className="details-section d-flex">
                    <div className="movie-details">
                        <div className="movie-info mt-5">
                            <div className="top-details d-flex">
                                <div className="title-rating">
                                    <h1 className="detail-title mb-2">{movieInfo.original_title}</h1>
                                    <h6 className="detail-title tmdb-rating">TMBD Rating &nbsp;<i className="fas fa-chevron-right"></i> &nbsp;<i className="yellow fas fa-star me-2"></i>{parseFloat(movieInfo.vote_average).toFixed(1)} / 10 </h6>
                                    <div>
                                        <p>{movieInfo.release_date} &nbsp;&nbsp;| &nbsp;&nbsp;{movieInfo.runtime} min</p>
                                    </div>
                                </div>
                                <div className="action-buttons">
                                    <div className="rating-details mb-1 fs-6">
                                        <p>Your Rating &nbsp;</p>
                                        <StarRatingComponent
                                            name="userRating"
                                            starCount={5}
                                            value={userRating}
                                            onStarClick={handleRatingClick}
                                        />
                                    </div>
                                    <div className="second-button mt-4">
                                        <button onClick={() => { store.token ? actions.addToWatchlist(movieInfo) : alert("Please, sign in or register first! :)") }} disabled={store.watchlist.some(movie => movie.id === movieInfo.id)} className="details-watchlist-btn btn-light"> {store.watchlist.some(movie => movie.id === movieInfo.id) ? 'Added to Your Watchlist' : 'Add to Watchlist'} </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="poster-video-container">
                            <div className="movie-poster">
                                <img src={`https://image.tmdb.org/t/p/w1280/${movieInfo.poster_path}`} alt="Movie Poster" />
                            </div>
                            <div className="movie-video">
                                <iframe
                                    width="760"
                                    height="815"
                                    src={`https://www.youtube.com/embed/${videoKey}?autoplay=1&mute=1`}
                                    title="YouTube video player"
                                    frameBorder="0"
                                    allowFullScreen
                                ></iframe>
                            </div>
                        </div>
                        <div className="movie-summary">
                            <p><span className="sub">Genre:</span> {movieInfo.genres && movieInfo.genres[0].name}</p>
                            <p>{movieInfo.overview}</p>
                        </div>
                        <hr />
                        <div className="movie-cast">
                            <p><span className="sub">Tagline:</span> {movieInfo.tagline}</p>
                            <hr />
                            <p><span className="sub">Budget:</span> {movieInfo.budget} $</p>
                        </div>
                    </div>
                </div>
                <div className="comments-section">
                    <div className="comments-main-wrapper">
                        <ul className="comments-list-wrapper">
                            <p className="text-white text-start ms-5 mt-3">10 Comments</p>
                            <li className="comment-item px-5 d-flex mb-5">
                                <input type="text" id="add-comment" className="comment-input" placeholder="Add a comment..." />
                                <button type="button" className="btn btn-light ms-3 comment-btn">Comment</button>
                            </li>
                            <li className="comment-item comment-card px-5 text-white mb-3">
                                <p><strong>@username</strong></p>
                                <p>Hello, I'm an example comment</p>
                                <div className="likes-and-dislikes d-flex">
                                    <div className="likes d-flex me-4">
                                        <i className="far fa-thumbs-up me-2"></i>
                                        <p>2</p>
                                    </div>
                                    <div className="dislikes d-flex">
                                        <i className="far fa-thumbs-down me-2"></i>
                                        <p>1</p>
                                    </div>
                                </div>
                            </li>
                            <li className="comment-item comment-card px-5 text-white mb-3">
                                <p><strong>@username2</strong></p>
                                <p>Example comment number 2 here!</p>
                                <div className="likes-and-dislikes d-flex">
                                    <div className="likes d-flex me-4">
                                        <i className="far fa-thumbs-up me-2"></i>
                                        <p>3</p>
                                    </div>
                                    <div className="dislikes d-flex">
                                        <i className="far fa-thumbs-down me-2"></i>
                                        <p>2</p>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};