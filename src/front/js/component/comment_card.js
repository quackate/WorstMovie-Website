import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/detail.css";
import { Context } from "../store/appContext";

export const CommentCard = (props) => {
    const { store, actions } = useContext(Context);

    const [liked, setLiked] = useState(false);
    const [disliked, setDisliked] = useState(false);

    const like_thumb_weight = 'far';
    const dislike_thumb_weight = 'far';

    const like = () => {
        if (store.liked === false) {
            actions.likeComment(props.likes, props.comment_id);
            like_thumb_weight = 'fas';
            //console.log(liked)
            //window.location.reload();
        }
        else {
            actions.removeLike(props.likes, props.comment_id)
            like_thumb_weight = 'far';
            //window.location.reload();
        }
    }

    const handleLike = () => {
        if (store.token) {
            like();
            console.log(store.liked)
        }
        else (alert("Please, sign in or register first! :)"))
    }

    const dislike = () => {
        if (store.disliked === false) {
            actions.dislikeComment(props.dislikes, props.comment_id);
            dislike_thumb_weight = 'fas';
            //window.location.reload();
        }
        else {
            actions.removeDislike(props.dislikes, props.comment_id)
            dislike_thumb_weight = 'far';
            //window.location.reload();
        }
    }

    const handleDislike = () => {
        if (store.token) {
            dislike()
        }
        else (alert("Please, sign in or register first! :)"))
    }

    const handleDelete = () => {
        if (store.token) {
            actions.deleteComment(props.comment_id);
            //window.location.reload();
        }
        else (alert("Please, sign in or register first! :)"))
    }

    return (
        <div className="commentcard-wrapper">
            <li className="comment-item comment-card px-5 text-white mb-3">
                <div className="top-of-comment d-flex">
                    <p><strong>@{props.username}</strong></p>
                    <div className="dropdown">
                        <button className="menu-btn btn btn-dark" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <i className="fas fa-ellipsis-v pt-2"></i>
                        </button>
                        {
                            store.user_id === props.author_id ? (
                                <ul className="dropdown-menu dropdown-comments dropdown-menu-dark dropdown-menu-end">
                                    {/*<li className="dropdown-item"><i className="fas fa-pencil-alt me-3"></i>Edit</li>*/}
                                    <li className="dropdown-item" onClick={handleDelete}><i className="far fa-trash-alt me-3"></i>Delete</li>
                                </ul>
                            ) :
                            ""
                        }
                    </div>
                </div>
                <p>{props.content}</p>
                <div className="likes-and-dislikes d-flex">
                    <div className="likes d-flex me-4">
                        <i className={`like-btn ${store.liked === false ? 'far' : 'fas'} fa-thumbs-up me-2`} onClick={handleLike}></i>
                        <p>{props.likes}</p>
                    </div>
                    <div className="dislikes d-flex">
                        <i className={`dislike-btn ${dislike_thumb_weight} fa-thumbs-down me-2`} onClick={handleDislike}></i>
                        <p>{props.dislikes}</p>
                    </div>
                </div>
            </li>
        </div>
    );
};