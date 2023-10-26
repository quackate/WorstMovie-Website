import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";
import "../../styles/detail.css";
import { useNavigate } from "react-router-dom";
import StarRatingComponent from 'react-star-rating-component';
import { CommentCard } from "../component/comment_card";

export const Detail = () => {
    const { store, actions } = useContext(Context);
    const params = useParams();
    const [movieInfo, setMovieInfo] = useState({});
    const [videoKey, setVideoKey] = useState();
    const [userRating, setUserRating] = useState()

    useEffect(() => {
        actions.getComments(setComments, params.movieId);
    }, []);


    const [newComment, setNewComment] = useState("");
    const [comments, setComments] = useState([]);

    const addComment = () => {
        if (store.token) {
        actions.addComment(movieInfo, movieInfo.poster_path, movieInfo.id, newComment);
        setNewComment("");
        window.location.reload();
        }
        else (alert("Please, sign in or register first! :)"))
    }

    /*const addComment = () => {
        {store.token ?
            (actions.addComment(movieInfo.id, newComment) && setNewComment("")) : alert("Please, sign in or register first! :)")}
    }*/

const deleteComment = (i) => {
    setComments(comments.filter((l, currentIndex) => i != currentIndex));
}

/*const handleAddToWatchlist = (movie) => {
 actions.addToWatchlist(movie);
 console.log("movieposter",movie.poster_path)
 };*/

const handleRatingClick = (nextValue) => {
    {
        store.token ?
            (setUserRating(nextValue) &&
                //localStorage.setItem(`userRating-${params.movieId}`, nextValue.toString());
                actions.rateMovie(movieInfo, nextValue, movieInfo.poster_path))
            : alert("Please, sign in or register first! :)")
    }

};

useEffect(() => {
    actions.getTrailerForMovie(params.movieId, setVideoKey);
    actions.getMovieById(params.movieId, setMovieInfo);
    actions.getUserRating(params.movieId, setUserRating)
    actions.getToken()
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
                                    <p className="m-0">Your Rating &nbsp;</p>
                                    <StarRatingComponent
                                        name="userRating"
                                        starCount={10}
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

            {/* Beginning of comment section */}

            <div className="comments-section">
                <div className="comments-main-wrapper">
                    <ul className="comments-list-wrapper scrollb">
                        <p className="text-white text-start ms-5 mt-3">{comments.length == 1 ? `${comments.length} Comment` : `${comments.length} Comments`}</p>
                        <li className="comment-item px-5 d-flex mb-5">
                            <input type="text" id="add-comment" className="comment-input" placeholder="Add a comment..." onChange={e => setNewComment(e.target.value)} value={newComment} />
                            <button type="button" className="btn btn-light ms-3 comment-btn" onClick={addComment}>Comment</button>
                        </li>
                        {comments?.map((comment, index) => (
                            <CommentCard username={comment.author_username} content={comment.content} likes={comment.like_total} dislikes={comment.dislike_total} index={index} />
                        ))}
                        <li className="comment-item comment-card px-5 text-white mb-4 text-center">
                            {comments.length == 0 ? "No comments yet. Be the first to add a comment!" : ""}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
);
};

export default Detail;